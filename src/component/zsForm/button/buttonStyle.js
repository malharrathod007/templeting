import styled from 'styled-components';

const ButtonWrap = styled.span`
    position:relative;
    display:block;
    font-family:Roboto-Regular;
    .buttonStyle{
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 1.92px;
        text-align: center;
        color: #ffffff;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .st0{
        fill:url(#SVGID_1_);
        
    }

    .st1{
        filter:url(#Adobe_OpacityMaskFilter);
    }

    .st2{
        opacity:0.18;mask:url(#SVGID_2_);
    }

    .st3{
        fill:none;
        stroke:#17c3fc;
    }
    .st0{
        fill:url(#SVGID_1_);
    }
    &:hover{
        cursor:pointer;
      
        .st0{
            fill:none;
            stroke:#17c3fc;    
        }
    }
    
`;


export default ButtonWrap;