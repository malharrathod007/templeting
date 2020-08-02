import styled from "styled-components";

const ZsInputWrapper = styled.div`
  position: relative;
  font-family:Roboto-Regular;
  width: 100%;
  .btn:active {
    outline: none;
  }
  .btn:focus {
    outline: none;
  }
  .zsInput {
    //background-color: transparent !important;
    height: 40px;
    
    border-radius: 0;
    width: 100%;
    padding: 0 10px;
    border: solid 1px #18c6ff;
    padding-top: 5px;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;

    &:focus {
      box-shadow: none !important;
      outline: none !important;
    }
    .fileUpload {
      position: relative;
      overflow: hidden;
    }
  }
.abc{
  height: 40px !important;
  border-radius: 0;
  width: 100%;
  padding: 0 10px;
  padding-top: 5px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 37px;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  border-bottom:solid 1px #18c6ff;
  border-top:solid 1px #18c6ff;
  border-left:solid 1px #18c6ff;
  border-right:none;
  &:focus {
    box-shadow: none !important;
    outline: none !important;
  }
  .fileUpload {
    position: relative;
    overflow: hidden;
  }
}
  .disabledInput {
    pointer-events: none;
    opacity: 0.35;
  }
  .abc ~ .plcHldr {
    cursor: auto;
    position: absolute;
    left: 10px;
    top: 8px;
    transition: 0.3s;
    z-index: 2;
    padding: 0 2px;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.83;
    letter-spacing: 1px
    text-align: left;
    color: rgba(255, 255, 255, 0.5);

    // width: calc(100% - 20px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .xxx{
    color:#787878;
    float:right;
    padding:11px;
    border-bottom:1px solid #18c6ff;
    border-top:1px solid #18c6ff;
    border-right:1px solid #18c6ff;
    border-left:none;
    margin-top:-40px;
    margin-right:-33px;
    &:focus {
      box-shadow: none !important;
      outline: none !important;
    }
    .fileUpload {
      position: relative;
      overflow: hidden;
    }
  }
  .abc:focus ~ .plcHldr,
  .has-content.abc ~ .plcHldr {
    top: -12px;
    background: #07202b;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.75);
  }

  .fillBox ~ .plcHldr,
  .has-content.abc ~ .plcHldr {
    top: -10px !important;
    background: #07202b ;
    transition: 0.3s !important;
    color: rgba(255, 255, 255, 0.75) !important;
  }
  .xxx ~ .plcHldr {
    cursor: auto;
    position: absolute;
    left: 10px;
    top: 8px;
    transition: 0.3s;
    z-index: 2;
    padding: 0 2px;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.83;
    letter-spacing: normal;
    text-align: left;
    color: rgba(255, 255, 255, 0.5);

    // width: calc(100% - 20px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .zsInput ~ .plcHldr {
    cursor: auto;
    position: absolute;
    left: 10px;
    top: 8px;
    transition: 0.3s;
    z-index: 2;
    padding: 0 2px;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.83;
    letter-spacing: normal;
    text-align: left;
    color: rgba(255, 255, 255, 0.5);

    // width: calc(100% - 20px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .xxx:focus ~ .plcHldr,
  .has-content.xxx ~ .plcHldr {
    top: -10px;
    background: #07202b;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.75);
  }
  .zsInput:focus ~ .plcHldr,
  .has-content.zsInput ~ .plcHldr {
    top: -10px;
    background: #07202b;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.75);
  }
  .xyz:focus ~ .plcHldr,
  .has-content.xyz ~ .plcHldr {
    top: -10px;
    background: #07202b;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.75);
  }
  .fillBox ~ .plcHldr,
  .has-content.xxx ~ .plcHldr {
    top: -10px !important;
    background: #07202b ;
    transition: 0.3s !important;
    color: rgba(255, 255, 255, 0.75) !important;
  }
  .fillBox ~ .plcHldr,
  .has-content.zsInput ~ .plcHldr {
    top: -10px !important;
    background: #07202b ;
    transition: 0.3s !important;
    color: rgba(255, 255, 255, 0.75) !important;
  }
  .plcHldr:active,
  .plcHldr:focus {
    top: -10px !important;
    background: #07202b;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export default ZsInputWrapper;
