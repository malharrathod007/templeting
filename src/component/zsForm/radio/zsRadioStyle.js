import styled from 'styled-components';

const ZsRadioWrapper = styled.div`
font-family:Roboto-Regular;
margin:12px 0px;
margin-right: 30px;
.wrapper{
        display:flex;
        margin-top: -0.7rem;
        .radioActive{
            background:#17a4d3;
        }

        .radioBtn{
            width: 18px;
            height: 18px;
            border-radius: 50%;
            margin-right:15px;
            border: solid 1px #18c6ff;
            cursor:pointer;
            
        }
    
        // .btnLabel{
        //     margin:5px;
        //     font-size: 14px;
        //     font-weight: normal;
        //     font-style: normal;
        //     font-stretch: normal;
        //     line-height: 1.31;
        //     letter-spacing: 1.92px;
        //     text-align: left;
        //     color: #ffffff;
        // }
        .input{
            color:pink;
        }
        [type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #fff;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #18c6ff;
    border-radius: 100%;
    background: transparent;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #18c6ff;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
    }
`;

export default ZsRadioWrapper;