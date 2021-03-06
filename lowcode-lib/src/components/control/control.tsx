import {
  // GatewayOutlined,
  LayoutOutlined,
  SettingOutlined,
  SyncOutlined,
  UnorderedListOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  List,
  message,
  Modal,
  Popconfirm,
  // Popover,
} from "antd";
import React, { CSSProperties, PropsWithChildren, useState } from "react";
import { UserConfig } from "../..";
import { wrapperMoveState } from "../wrapperMove/event";
import { replaceLocale } from "../../locale";
import { mouseUp, moveState } from "./state";
import SettingsModal from "./settings";
import deepcopy from "deepcopy";

export interface ControlProps {
  config: UserConfig;
  style?: CSSProperties;
}

export function Control(props: PropsWithChildren<ControlProps>) {
  const { style } = props;
  const [visible, setVisible] = useState(false);
  const [configVisible, setConfigVisible] = useState(false);
  const [form] = Form.useForm();
  const [settingVisible, setSettingVisible] = useState(false);
  const [api, contextHolder] = message.useMessage();
  const [xy, setXy] = useState({ x: 0, y: 0 });
  return (
    <>
      <div
        className="ant-menu"
        onMouseUp={mouseUp}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: `translate(${xy.x}px,${xy.y}px)`,
          ...style,
        }}
      >
        {contextHolder}
        <Button
          onMouseDown={(e) => {
            moveState.startX = e.clientX;
            moveState.startY = e.clientY;
            moveState.fn = setXy;
            moveState.isMove = true;
          }}
          type="text"
          style={{ cursor: "move" }}
          icon={<UnorderedListOutlined />}
        ></Button>
        <Button
          icon={<LayoutOutlined />}
          onClick={() => {
            props.config.ticker = !props.config.ticker;
            props.config.getStore().forceUpdate();
          }}
        ></Button>
        {/* <Popover
          placement="left"
          content={
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Button
                block
                onClick={() => {
                  setVisible(true);
                }}
              >
                {replaceLocale("modal.new", "????????????", props.config)}
              </Button>
              <Button
                block
                onClick={() => {
                  setConfigVisible(true);
                }}
              >
                {replaceLocale("modal.control", "????????????", props.config)}
              </Button>
            </div>
          }
        >
          <Button icon={<GatewayOutlined />}></Button>
        </Popover> */}

        {/* <Button
          icon={<VideoCameraOutlined />}
          onClick={() => {
            props.config.timeline = !props.config.timeline;
            props.config.getStore().forceUpdate();
          }}
        ></Button> */}
        <Button
          icon={<SyncOutlined />}
          onClick={() => {
            wrapperMoveState.needX = 0;
            wrapperMoveState.needY = 0;
            props.config.getStore().forceUpdate();
          }}
        ></Button>
        <Button
          icon={<SettingOutlined />}
          onClick={() => {
            setSettingVisible(true);
          }}
        ></Button>
      </div>

      <Modal
        title={replaceLocale("modal.control", "????????????", props.config)}
        visible={configVisible}
        onOk={() => setConfigVisible(false)}
        onCancel={() => setConfigVisible(false)}
        footer={null}
      >
        <List>
          {props.config.getStore().isEdit() && (
            <div>
              {replaceLocale(
                "modal.popup.exit",
                "??????????????????????????????????????????",
                props.config
              )}
            </div>
          )}
          {!props.config.getStore().isEdit() &&
            Object.keys(props.config.getStore().getData().modalMap).map((v) => {
              return (
                <List.Item
                  key={v}
                  // @ts-ignore
                  actions={[
                    <Popconfirm
                      title={replaceLocale(
                        "modal.popup.edit",
                        "????????????????????????????????????????",
                        props.config
                      )}
                      onConfirm={() => {
                        const store = props.config.getStore();
                        const clone = deepcopy(store.getData());
                        const sign = store.changeNormalToModal(clone, v);
                        if (!sign.success && sign.sign === 0) {
                          api.error(
                            replaceLocale(
                              "modal.popup.save",
                              "????????????????????????????????????",
                              props.config
                            )
                          );
                          return;
                        }
                        if (!sign.success && sign.sign === 1) {
                          api.error(
                            replaceLocale(
                              "modal.popup.notfond",
                              `?????????????????? ${sign.param}`,
                              props.config,
                              { name: sign.param },
                              "?????????????????? {name}"
                            )
                          );
                          return;
                        }
                        setConfigVisible(false);
                        store.setData(clone);
                      }}
                      okText={replaceLocale("yes", "??????", props.config)}
                      cancelText={replaceLocale("no", "??????", props.config)}
                    >
                      <Button type="link">
                        {replaceLocale("edit", "??????", props.config)}
                      </Button>
                    </Popconfirm>,

                    <Popconfirm
                      title="??????????????????????????????????"
                      onConfirm={() => {
                        const sign = props.config.getStore().removeModal(v);
                        if (!sign.success && sign.sign === 0) {
                          api.error(
                            replaceLocale(
                              "modal.popup.save",
                              "????????????????????????????????????",
                              props.config
                            )
                          );
                        }
                        if (!sign.success && sign.sign === 1) {
                          api.error(
                            replaceLocale(
                              "modal.popup.notfond",
                              `?????????????????? ${sign.param}`,
                              props.config,
                              { name: sign.param },
                              "?????????????????? {name}"
                            )
                          );
                        }

                        setConfigVisible(false);
                      }}
                      okText={replaceLocale("yes", "??????", props.config)}
                      cancelText={replaceLocale("no", "??????", props.config)}
                    >
                      <Button type="link">
                        {replaceLocale("control.delete", `??????`, props.config)}
                      </Button>
                    </Popconfirm>,
                  ]}
                >
                  {v}
                </List.Item>
              );
            })}
          {!props.config.getStore().isEdit() &&
            Object.keys(props.config.getStore().getData().modalMap).length ===
              0 && (
              <div style={{ textAlign: "center" }}>
                {replaceLocale(
                  "modal.popup.nomodal",
                  `??????????????????`,
                  props.config
                )}
              </div>
            )}
        </List>
      </Modal>
      <Modal
        okText={replaceLocale("yes", "??????", props.config)}
        cancelText={replaceLocale("no", "??????", props.config)}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              const modalName = values.modalName;
              const sign = props.config.getStore().newModalMap(modalName);

              if (!sign.succeess && sign.sign === 0) {
                api.error(
                  replaceLocale(
                    "modal.popup.save",
                    `????????????????????????????????????`,
                    props.config
                  )
                );
              }
              if (!sign.succeess && sign.sign === 1) {
                api.error(
                  replaceLocale(
                    "modal.popup.repeat",
                    `?????????????????? ${sign.param}`,
                    props.config,
                    {
                      name: sign.param,
                    },
                    "?????????????????? {name}"
                  )
                );
              }
              setVisible(false);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        title={replaceLocale("modal.new", "????????????", props.config)}
        onCancel={() => setVisible(false)}
        visible={visible}
      >
        <Form layout="vertical" name="basic" form={form}>
          <Form.Item
            label={replaceLocale("modal.name", "????????????", props.config)}
            name="modalName"
            rules={[
              {
                required: true,
                message: replaceLocale(
                  "modal.popup.name",
                  "?????????????????????!",
                  props.config
                ),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <SettingsModal
        config={props.config}
        visible={settingVisible}
        onOk={(v: any) => {
          props.config.marklineConfig.isAbsorb = v.absorb;
          props.config.marklineConfig.indent = v.indent;
          props.config.scaleState.minValue = v.min;
          props.config.scaleState.maxValue = v.max;
          props.config.timelineConfig.autoFocus = v.autofocus;
          setSettingVisible(false);
        }}
        onCancel={() => setSettingVisible(false)}
        message={api}
      ></SettingsModal>
    </>
  );
}

export default Control;
