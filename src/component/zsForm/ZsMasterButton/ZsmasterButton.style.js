import styled from 'styled-components';

const ButtonWrap = styled.span`
    position:relative;
    display:block;
    font-family: Roboto-Regular;
    outline:none;
    .buttonStyle{
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-family: Roboto-Regular;
        font-stretch: normal;
        letter-spacing: 1.92px;
        text-align: center;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: absolute;
        top: 50%;
        cursor:pointer;
        transform: translate(-50%, -50%);
    }

    .st0{
        fill:none;
        stroke:#17A4D3;
        stroke-miterlimit:10;
    }

    .st1{
        opacity:0.75;
        // fill:url(#SVGID_1_);
    }

    .st2{
        opacity:0.18;mask:url(#SVGID_2_);
    }

    .st3{
        fill:none;
        stroke:#17c3fc;
    }
  
    &:hover{
        cursor:pointer;

        .st1{
            // fill:url(#SVGID_2_);
            stroke:#17c3fc;
        }
    }
    
`;


export default ButtonWrap;