import React from "react";
import ReactTooltip from "react-tooltip";
import ZsToolTipWrapper from "./zsToolTipStyle";
const ZsToolTip = props => {
  const { id, place, content, ownStyle, abc, select, dashboard, logo } = props;
  return (
    <ZsToolTipWrapper>
      <ReactTooltip
        id={id}
        place={place}
        className={
          abc
            ? "tooltip"
            : ownStyle
            ? "tooltip-s tooltip-m"
            : select
            ? "zstooltip"
            : logo
            ? "logo"
            : "zstooltip"
        }
      >
        {dashboard ? (
          dashboard === "dash" ? (
            <p style={{ color: "#fdfdfd", marginTop: "-8.5px" }}>{content} </p>
          ) : (
            <p style={{ color: "#fdfdfd", marginTop: "6px" }}>{content} </p>
          )
        ) : select ? (
          <p style={{ color: "#fdfdfd", marginTop: "-3px" }}>{content} </p>
        ) : (
          <span style={{ color: "#fdfdfd" }}>{content}</span>
        )}
      </ReactTooltip>
    </ZsToolTipWrapper>
  );
};
export default ZsToolTip;
