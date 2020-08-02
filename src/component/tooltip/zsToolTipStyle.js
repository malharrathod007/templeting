import styled from "styled-components";

const ZsToolTipWrapper = styled.div`
.__react_component_tooltip{
  padding: 4px 5px 5px 9px !important;
  // border-radius: 2px 25px 25px 30px !important;
  background: #132129 !important;
  box-shadow: 0 1 3px #17c3fc !important;
  font-size: 14px !important;
  color: #fdfdfd !important;
  border: 1px solid #17c3fc;
  margin-left:20px !important;
  border-radius:unset !important;
  //width:fit-content;
}
.tooltip{
  color:black !important;
  border-radius: unset !important;
border:1px solid #17c3fc;
//width:fit-content;
}
.tooltip-s{
  position: absolute !important;
  text-align-last: left !important;
  border-radius: unset !important;
  word-spacing: 2px !important;
  line-height: normal !important;
  padding: 4px !important;
  background: #132129 !important;
  color: #fdfdfd !important;
  font-size: 14px !important;
  border: 0px !important;
  opacity: 0px !important;
  z-index: 1 !important;
  padding: 4px 5px 5px 9px !important;
  border-radius: 2px 25px 25px 30px !important;
  text-transform: capitalize !important;
  pointer-events: none !important;
  visibility: hidden !important;
  box-shadow: 0 1 3px #17c3fc !important;
}
.zstooltip{
     background:#132129 !important;
   // padding:0px 10px;
      height:33px;
      border-radius: unset !important;
      color: #fdfdfd !important;
      padding: 0px 10px !important;     
      margin-left:4px !important;
      opacity:1
  }
  .tooltip-inner {

    font-size: 14px !important;
    text-align: center;
    color: #fdfdfd !important;
    background: #132129 !important;
    box-shadow: 0 1 3px #17c3fc !important;
}
.logo{
  background:#132129 !important;
// padding:0px 10px;
   height:50px;
   border-radius: unset !important;
   color: #fdfdfd !important;
   padding: 4px 10px !important;     
   margin-left:14px !important;
}
.__react_component_tooltip.type-dark.place-right:after{
  content: "";
  position: absolute;
  top: 15px;
  left: 8%;
  width: 10px;
  height: 10px;
  transform: rotate(135deg);
  margin-left: -10px;
  border-width: 1px;
  border-style: solid;
  background: #132129;
  border-color: transparent #17C3FC #17C3FC transparent;
}
.logo.type-dark.place-right:after{
  content: "";
  position: absolute;
  top: 13px;
  left: 3% !important;
  width: 10px;
  height: 10px;
  transform: rotate(135deg);
  margin-left: -10px;
  border-width: 1px;
  border-style: solid;
  background: #132129;
  border-color: transparent #17C3FC #17C3FC transparent;
}
.__react_component_tooltip.type-dark.place-top:after {
  content: "";
  position: absolute;
  top: 25px;
  left: 50%;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  margin-left: -10px;
  border-width: 1px;
  border-style: solid;
  background: #132129;
  border-color: transparent #17C3FC #17C3FC transparent;
}
.__react_component_tooltip.type-dark.place-bottom:after {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  transform: rotate(225deg);
  margin-left: -10px;
  border-width: 1px;
  border-style: solid;
  background: #132129;
  border-color: transparent #17C3FC #17C3FC transparent;
}
.__react_component_tooltip.type-dark.place-left:after {
  content: "";
  position: absolute;
  top: 16px;
  left: 50%;
  width: 10px;
  height: 10px;
  transform: rotate(315deg);
  margin-left: 32px;
  border-width: 1px;
  border-style: solid;
  background: #132129;
  border-color: transparent #17C3FC #17C3FC transparent;
}
.tooltip-s:after{
  display:none !important;
}



`
export default ZsToolTipWrapper;
