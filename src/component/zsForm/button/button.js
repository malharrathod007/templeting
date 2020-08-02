import React from 'react';
import ButtonWrap from './buttonStyle';
import { Spinner } from 'react-bootstrap';

const ZsButton = (props) => {
    const { title, loading, classList, onClick, disabled, height = 44, width = 185, fontSize = 16, id } = props;
    let disableStyle = {
        height: height + 'px',
        width: width + 'px',
        margin: '0 auto'
    };
    if (loading || disabled) {
        disableStyle.pointerEvents = "none";
        disableStyle.opacity = "0.5";
    }
    return (
        <ButtonWrap onClick={onClick} style={disableStyle} className={loading ? classList + " loadingBtn" : classList}>
            <svg width={width} height={height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox={'0 0 ' + width + ' ' + height} style={{ enableBackground: 'new 0 0 ' + width + " " + height }}>
                <g>
                    <g>
                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="128.5" y1="40" x2="128.5" y2="3">
                            <stop offset="0" style={{ stopColor: '#0897E0' }} />
                            <stop offset="0.2639" style={{ stopColor: '#0B9EE4' }} />
                            <stop offset="1" style={{ stopColor: '#11ADEE' }} />
                        </linearGradient>
                        <polygon fill="none" stroke="none" className="st0" points={`3,${height / 2.3} 3,${height} ${width},${height} ${width},3 ${width / 11},3`} />
                    </g>
                    <defs>
                        <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="3" y="3" width="251" height="37">
                            <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" colorInterpolationFilters="sRGB" result="source" />
                        </filter>
                    </defs>
                    <mask maskUnits="userSpaceOnUse" x="3" y="3" width="251" height="37" id="SVGID_2_">
                        <g className="st1">
                            <image style={{ overflow: 'visible' }} width="255" height="41" transform="matrix(1 0 0 1 1 1)">
                            </image>
                        </g>
                    </mask>
                    <g className="st2">
                        <polygon className="st3" points={`3,${height / 2} 3,${height} ${width},${height} ${width},3 ${width / 10},3`} />
                    </g>
                </g>
            </svg>
            <span className="buttonStyle" id={id} style={{ width: width - 10, height: height + 'px', lineHeight: (height) + 'px', fontSize: fontSize }}> {loading ? <Spinner size="sm" animation="border" /> : null}{loading ? "   " + title : title}</span>
        </ButtonWrap >
    )
}
export default ZsButton;
