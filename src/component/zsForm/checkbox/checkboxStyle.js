import styled from 'styled-components';

const ZsCheckboxWrapper = styled.div`
  
font-family:Roboto-Regular;
    .wrapper{
        display:flex;

        .checkActive{
            background:#17a4d3;
        }

        .checkBtn{
            margin-top: 2px;
            width: 15px;
            height: 15px;
            // margin-right: 25px;
            border: solid 1px #17a4d3;
            cursor: pointer;
        }
    
        .btnLabel{
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 2.31;
            letter-spacing: 1.92px;
            text-align: left;
            color: #ffffff;
        }
    }
`;

export default ZsCheckboxWrapper;