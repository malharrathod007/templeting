import styled from 'styled-components';

const ZsRadioWrapper = styled.span`
    margin-right: 30px;
    font-family: Roboto-Regular;
    .wrapper{
        display:flex;

        .radioActive{
            background:#17a4d3;
        }

        .radioBtn{
            width: 18px;
            height: 18px;
            // border-radius: 50%;
            margin-right:15px;
            border: solid 1px #17a4d3;
            cursor:pointer;
        }
    
        .btnLabel{
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.31;
            letter-spacing: 1.92px;
            text-align: left;
            color: #ffffff;
        }
    }
`;

export default ZsRadioWrapper;