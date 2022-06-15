import { containerDragResolve } from "../core/crossDrag";
import { containerFocusRemove } from "../core/focusHandler";
import { innerContainerDrag } from "../core/innerDrag";
import { NormalMarkLineRender } from "../core/markline";
import { IStoreData } from "../core/store/storetype";
import { wrapperMoveState } from "./wrapperMove/event";
import {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import Blocks from "./blocks";
import { containerResizer } from "../core/resizeHandler/containerResizer";
import React from "react";
import UserConfig from "../config";
import styles from "../index.less";
import { getRealHeight } from "../core/transfer";

interface ContainerProps {
  state: IStoreData;
  context: "edit" | "preview";
  config: UserConfig;
  editContainerStyle?: CSSProperties;
  previewContainerStyle?: CSSProperties;
}
function Container(props: PropsWithChildren<ContainerProps>) {
  const { editContainerStyle, previewContainerStyle } = props;
  const scaleState = props.config.getScaleState();
  const transform = useMemo(() => {
    if (props.context === "edit") {
      return `scale(${scaleState.value}) translate(${wrapperMoveState.needX}px, ${wrapperMoveState.needY}px)`;
    } else {
      return undefined;
    }
  }, [props.context, scaleState]);

  const bgColor = () => {
    const isEdit = props.config.getStore().isEdit();
    if (isEdit) {
      return "rgba(255,255,255,1)";
    } else {
      return props.state.globalState.containerColor;
    }
  };
  const forceUpdate = useState(0)[1];
  props.config.containerForceUpdate = () => {
    forceUpdate((p) => p + 1);
  };

  useEffect(() => {
    if (props.context === "preview") {
      props.config.onMounted();
      props.config.onMountedFn.forEach((v) => v());
    }
    return () => {
      if (props.context === "preview") {
        props.config.destroyed();
        props.config.destroyedFn.forEach((v) => v());
      }
    };
  }, [props.config, props.context]);

  const minWxEle = () => (
    <div className={styles.minwx}>
      <div>
        <svg
          // @ts-ignore
          t="1652778150874"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2782"
          width="8"
          height="8"
        >
          <path
            d="M480 480m-288 0a4.5 4.5 0 1 0 576 0 4.5 4.5 0 1 0-576 0Z"
            p-id="2783"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          // @ts-ignore
          t="1652778150874"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2782"
          width="12"
          height="12"
        >
          <path
            d="M480 480m-288 0a4.5 4.5 0 1 0 576 0 4.5 4.5 0 1 0-576 0Z"
            p-id="2783"
            fill="#ffffff"
          ></path>
        </svg>
        <svg
          // @ts-ignore
          t="1652778150874"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2782"
          width="8"
          height="8"
        >
          <path
            d="M480 480m-288 0a4.5 4.5 0 1 0 576 0 4.5 4.5 0 1 0-576 0Z"
            p-id="2783"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div>
        <svg
          // @ts-ignore
          t="1652775167764"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2090"
          width="20"
          height="20"
        >
          <path
            d="M512 64c60.5 0 119.2 11.8 174.4 35.2 53.3 22.6 101.3 54.9 142.4 96 41.2 41.2 73.5 89.1 96 142.4C948.2 392.8 960 451.5 960 512s-11.8 119.2-35.2 174.4c-22.6 53.3-54.9 101.3-96 142.4-41.2 41.2-89.1 73.5-142.4 96C631.2 948.2 572.5 960 512 960s-119.2-11.8-174.4-35.2c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512s11.8-119.2 35.2-174.4c22.6-53.3 54.9-101.3 96-142.4s89.1-73.5 142.4-96C392.8 75.8 451.5 64 512 64m0-64C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z"
            p-id="2091"
            fill="#ffffff"
          ></path>
          <path
            d="M512 512m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z"
            p-id="2092"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
  return (
    <>
      {props.context === "edit" && (
        <>
          <div
            style={{
              position: "absolute",
              height: `${props.state.container.height + 60}px`,
              width: `${props.state.container.width}px`,
              transform: `scale(${scaleState.value}) translate(${wrapperMoveState.needX}px, ${wrapperMoveState.needY}px)`,
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                id="yh-container"
                className={styles.yh_container}
                style={{
                  height: `${props.state.container.height}px`,
                  width: `${props.state.container.width}px`,
                  backgroundColor: bgColor(),
                  position: "relative",
                  overflow: props.config.containerOverFlow
                    ? "hidden"
                    : "visible",
                  cursor: "default",
                  lineHeight: props.state.globalState?.lineHeight ?? 1.575,
                  fontSize: props.state.globalState?.fontSize ?? 14,
                  ...editContainerStyle,
                }}
                {...(props.context === "edit"
                  ? containerDragResolve(props.config)
                  : null)}
                {...(props.context === "edit"
                  ? innerContainerDrag(props.config)
                  : null)}
                {...(props.context === "edit"
                  ? containerFocusRemove(props.config)
                  : null)}
              >
                {props.state.container.isMinwx && minWxEle()}

                {props.context === "edit" && (
                  <NormalMarkLineRender
                    config={props.config}
                    iframe={false}
                  ></NormalMarkLineRender>
                )}
                {props.state.block.map((v) => {
                  return (
                    <Blocks
                      config={props.config}
                      key={v.id}
                      data={v}
                      context={props.context}
                    ></Blocks>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${props.state.container.width}px`,
              }}
            >
              <div
                style={{ fontSize: "20px", cursor: "s-resize" }}
                onMouseDown={(e) =>
                  containerResizer.onMousedown(e, props.config)
                }
              >
                {props.config.getConfig().containerIcon}
              </div>
            </div>
          </div>
        </>
      )}
      {props.context === "preview" && (
        <div
          id="yh-container-preview"
          className={styles.yh_container_preview}
          style={{
            height: `${getRealHeight(props.state.container.height)}px`,
            width: `${props.state.container.width}px`,
            position: "relative" as "absolute" | "relative",
            overflow: "hidden",
            top: "20px",
            border: "2px solid #ccc",
            boxShadow: "0 0 10px #ccc",
            backgroundColor: bgColor(),
            transform: transform,
            lineHeight: props.state.globalState?.lineHeight ?? 1.575,
            fontSize: props.state.globalState?.fontSize ?? 14,
            ...previewContainerStyle,
          }}
        >
          {props.state.container.isMinwx && minWxEle()}
          {props.state.block.map((v) => {
            return (
              <Blocks
                key={v.id}
                config={props.config}
                data={v}
                context={props.context}
              ></Blocks>
            );
          })}
        </div>
      )}
    </>
  );
}
export default Container;
