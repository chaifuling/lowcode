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
                {replaceLocale("modal.new", "新建弹窗", props.config)}
              </Button>
              <Button
                block
                onClick={() => {
                  setConfigVisible(true);
                }}
              >
                {replaceLocale("modal.control", "弹窗配置", props.config)}
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
        title={replaceLocale("modal.control", "弹窗配置", props.config)}
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
                "请退出编辑弹窗后再打开该配置",
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
                        "是否切换至该弹窗并进行编辑?",
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
                              "请保存弹窗后编辑其他弹窗",
                              props.config
                            )
                          );
                          return;
                        }
                        if (!sign.success && sign.sign === 1) {
                          api.error(
                            replaceLocale(
                              "modal.popup.notfond",
                              `未找到该弹窗 ${sign.param}`,
                              props.config,
                              { name: sign.param },
                              "未找到该弹窗 {name}"
                            )
                          );
                          return;
                        }
                        setConfigVisible(false);
                        store.setData(clone);
                      }}
                      okText={replaceLocale("yes", "确定", props.config)}
                      cancelText={replaceLocale("no", "取消", props.config)}
                    >
                      <Button type="link">
                        {replaceLocale("edit", "编辑", props.config)}
                      </Button>
                    </Popconfirm>,

                    <Popconfirm
                      title="您确定要删除这个弹窗吗?"
                      onConfirm={() => {
                        const sign = props.config.getStore().removeModal(v);
                        if (!sign.success && sign.sign === 0) {
                          api.error(
                            replaceLocale(
                              "modal.popup.save",
                              "请保存弹窗后编辑其他弹窗",
                              props.config
                            )
                          );
                        }
                        if (!sign.success && sign.sign === 1) {
                          api.error(
                            replaceLocale(
                              "modal.popup.notfond",
                              `未找到该弹窗 ${sign.param}`,
                              props.config,
                              { name: sign.param },
                              "未找到该弹窗 {name}"
                            )
                          );
                        }

                        setConfigVisible(false);
                      }}
                      okText={replaceLocale("yes", "确定", props.config)}
                      cancelText={replaceLocale("no", "取消", props.config)}
                    >
                      <Button type="link">
                        {replaceLocale("control.delete", `删除`, props.config)}
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
                  `暂时没有弹窗`,
                  props.config
                )}
              </div>
            )}
        </List>
      </Modal>
      <Modal
        okText={replaceLocale("yes", "确定", props.config)}
        cancelText={replaceLocale("no", "取消", props.config)}
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
                    `请保存弹窗后编辑其他弹窗`,
                    props.config
                  )
                );
              }
              if (!sign.succeess && sign.sign === 1) {
                api.error(
                  replaceLocale(
                    "modal.popup.repeat",
                    `已有重名弹窗 ${sign.param}`,
                    props.config,
                    {
                      name: sign.param,
                    },
                    "已有重名弹窗 {name}"
                  )
                );
              }
              setVisible(false);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        title={replaceLocale("modal.new", "新增弹窗", props.config)}
        onCancel={() => setVisible(false)}
        visible={visible}
      >
        <Form layout="vertical" name="basic" form={form}>
          <Form.Item
            label={replaceLocale("modal.name", "弹窗名称", props.config)}
            name="modalName"
            rules={[
              {
                required: true,
                message: replaceLocale(
                  "modal.popup.name",
                  "请输入弹窗名称!",
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
