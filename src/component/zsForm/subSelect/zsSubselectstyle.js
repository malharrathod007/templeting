import styled from 'styled-components';

const ZsSelectWrapper = styled.div`
    position: relative;
    font-family:Roboto-Regular;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 49.5px;
    letter-spacing: normal;
    text-align: left;
    color: #2bc3fc;

    .isDisabled{
        pointer-events:none;
        opacity:0.35;
    }

    .zsSelectControl{
        height: 33px;
        padding:0 0 0 0;
        display:flex;
        justify-content:space-between;
        border-radius:0;
        // border-top: solid 1px #18c6ff;
        // border-bottom: solid 1px #18c6ff;
        // background-image: linear-gradient(to right,rgba(24, 198, 255, 0.35),rgba(19, 33, 41, 0.35));
        cursor:pointer;

        .selectedVal{
            width:70px !important;
            font-size: 14px;
            color:#2bc3fc
            width: calc(100% - 20px);
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
        }

        .zsDropArrow{
            height:10px;
            width:10px;
            border-right:2px solid #2bc3fc;
            border-bottom:2px solid #2bc3fc;
            transform:rotate(45deg);
            margin:17px 0 0 0 !important;
        }
    }

    .menuOpen{
        display:block !important;
        opacity:1 !important;
        top:-15px !important;
        transition:display 1s, opacity 1s, top 1s;
    }
    .selectHeader{
        height:15px;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 15px;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
    }
    .selectMenu{
        display:none;
        opacity:0;
        transition:display 1s, opacity 1s,top 1s;
        position: absolute;
        width: 100%;
        top:0;
        z-index:999;

        .menuContent{
            border: solid 1px #17c3fc;
            background-color: #132129;

            .option{
                color:#fff
                height: 40px;
                padding: 0 10px;
                cursor:pointer;
    
                &:hover{
                    background-image: linear-gradient(89deg, #18c6ff, #132129);
                }
            }
    
            .selectedOpt{
                background-image: linear-gradient(89deg, #18c6ff, #132129) !important;
            }
        }

    }
`;

export default ZsSelectWrapper;