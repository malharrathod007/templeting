import ButtonWrap from "./ZsmasterButton.style";
import { Spinner } from "react-bootstrap";

import React, { Component } from "react";

export class ZsMasterButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rId: Math.random(),
      rId2: Math.random(),
      fillId: "",
      focus: false
    };
  }

  componentDidMount() {
    this.setState({ fillId: "url(#" + this.state.rId + ")" });
  }

  changeStyle = typee => {
    if (typee === "fill") {
      this.setState({ fillId: "url(#" + this.state.rId2 + ")" });
    } else {
      this.setState({ fillId: "url(#" + this.state.rId + ")" });
    }
  };
  BtnFocus = (event) => {
    if (event.nativeEvent.target.innerText === this.props.title) {
      this.changeStyle("fill")
    }

    if (event.key === "Enter") {

      this.props.onClick();

    }

  }

  BtnFocusOut = (event) => {
    this.changeStyle("remove")
  }
  // focuseBTN = (e)=>{
  //   if(e == "focus"){
  //   }
  // }

  render() {
    const { rId, rId2, fillId, focus } = this.state;

    const {
      id,
      title,
      loading,
      classList,
      onClick,
      disabled,
      height,
      width,
      fontSize
    } = this.props;
    let disableStyle = {
      height: height + "px",
      width: width + "px",
      margin: "0 auto"
    };
    let focuseStyle = {
      height: height + "px",
      width: width + "px",
      margin: "0 auto",
      color: "cadetblue"
    };
    if (loading || disabled) {
      disableStyle.pointerEvents = "none";
      disableStyle.opacity = "0.5";
    }

    return (
      <ButtonWrap
        onClick={onClick}
        style={focus ? focuseStyle : disableStyle}
        id={id}
        tabIndex={0}
        onKeyUp={(event) => this.BtnFocus(event)}
        onKeyDown={(event) => this.BtnFocusOut(event)}
        // onFocus={this.focuseBTN("focus")}
        className={loading ? classList + " loadingBtn" : classList}
      >
        <svg
          width={width}
          height={height}
          version="1.1"
          onMouseEnter={() => this.changeStyle("fill")}
          onMouseLeave={() => this.changeStyle("remove")}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox={"0 0 " + width + " " + height}
          style={{ enableBackground: "new 0 0 " + width + " " + height }}
        >
          <g>
            <g>
              <linearGradient
                id={rId}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
              >
                <stop
                  offset="0"
                  style={{ stopColor: "#18c6ff", stopOpacity: 0.39 }}
                />

                <stop
                  offset="1"
                  style={{ stopColor: "#132129", stopOpacity: 0.39 }}
                />
              </linearGradient>
              <linearGradient
                id={rId2}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
              >
                <stop offset="0" style={{ stopColor: "#00bcfa" }} />

                <stop offset="1" style={{ stopColor: "#20333d" }} />
              </linearGradient>
              <polygon
                className="st0"
                points={`3,${height /
                  2.3} 3,${height} ${width},${height} ${width},3 ${width / 10},3`}
              />
            </g>

            <g className="st0">
              <polygon
                className="st1"
                fill={fillId}
                points={`3,${height /
                  2.3} 3,${height} ${width},${height} ${width},3 ${width / 10},3`}
              />
            </g>
          </g>
        </svg>
        <span
          className="buttonStyle"
          onMouseEnter={() => this.changeStyle("fill")}
          onMouseLeave={() => this.changeStyle("remove")}
          style={{
            width: width - 10,
            height: height + "px",
            lineHeight: height + 4 + "px",
            fontSize: fontSize ? fontSize : 16,
            left: "50%"
            // marginTop: "2.5px"
          }}
        >
          {" "}
          {loading ? <Spinner size="sm" animation="border" /> : null}
          {loading ? "   " + title : title}
        </span>
      </ButtonWrap>
    );
  }
}

export default ZsMasterButton;