import styled from "styled-components";

const ZsSelectWrapper = styled.div`
  position: relative;
  font-family: Roboto-Regular !important;
  font-size: 14px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: 40.5px;
  letter-spacing: normal;
  text-align: left;
  color: #d3d8da;

  .isDisabled {
    pointer-events: none;
    opacity: 0.35;
  }
  ::placeholder{
  color:#fff;
}


  .zsSelectControl {
    outline: 0px solid transparent;
    height: 38px;
    padding: 2px 18px;
    display: flex;
    justify-content: space-between;
    border-radius: 0;
   
    border-top: solid 1px #18c6ff;
    border-bottom: solid 1px #18c6ff;
    background-image: linear-gradient(to right,rgba(24, 198, 255, 0.35),rgba(19, 33, 41, 0.35));
    cursor: pointer;

    .selectedVal {
      line-height:34px;
      width: calc(100% - 20px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size:13px;
     
    }
    .searchSelect {
      outline:none !important;
      background: inherit !important;
      border: none !important;
      width: 100% !important;
      margin: 0px -18px !important;
      padding: 0px 18px;
      font-size: 14px;
      font-weight: 100;
      font-style: normal;
      font-stretch: normal;
      line-height: 50px;
      -webkit-letter-spacing: normal;
      -moz-letter-spacing: normal;
      -ms-letter-spacing: normal;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      margin-top:0px !important;
      padding:10px 15px; 

    }
    .zsDropArrowAuto {
     
      height: 8px;
      width: 8px;
      border-right: 2px solid #17c3fc;
      border-bottom: 2px solid #17c3fc;
      transform: rotate(45deg);
      margin: auto 0;
    }
    .zsDropArrowRotateAuto{
      height: 8px;
      width: 8px;
      border-right: 2px solid #17c3fc;
      border-bottom: 2px solid #17c3fc;
      transform: rotate(45deg);
      margin: auto 0;
    }
    .zsDropArrow {
     
      height: 8px;
      width: 8px;
      border-right: 2px solid #17c3fc;
      border-bottom: 2px solid #17c3fc;
      transform: rotate(45deg);
      margin: auto 0;
    }
    .zsDropArrowRotate{
      height: 8px;
      width: 8px;
      border-right: 2px solid #17c3fc;
      border-bottom: 2px solid #17c3fc;
      transform: rotate(45deg);
      margin: auto 0;
    }
  }

  .menuOpen {
    display: block !important;
    opacity: 1 !important;
    top: -15px !important;
    transition: display 1s, opacity 1s, top 1s;
  }

  .menuOpenAuto {
    display: block !important;
    opacity: 1 !important;
    top: 34px !important;
    transition: display 1s, opacity 1s, top 1s;
  }


  .selectHeader {
    height: 15px;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 15px;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  .selectMenu {
    display: none;
    margin-top:52px;
    opacity: 0;
    transition: display 1s, opacity 1s, top 1s;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 999;

    .menuContent {
      max-height: 180px;
      overflow: auto;
      border: solid 1px #17c3fc;
      background-color: #132129;
      overflow:auto;
       .option {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 35px;
        padding: 0px 10px;
        cursor: pointer;
        &:focus {
          color: #fff;
          line-height:30px;
          background-image: linear-gradient(89deg, #18c6ff, #132129);
        }
        &:hover {
          color: #fff;
          padding: 5px 10px;
          line-height:30px;
          background-image: linear-gradient(89deg, #18c6ff, #132129);
        }
      }

      .selectedOpt {
        background-image: linear-gradient(89deg, #18c6ff, #132129) !important;
      }
    }
  }
`;

export default ZsSelectWrapper;