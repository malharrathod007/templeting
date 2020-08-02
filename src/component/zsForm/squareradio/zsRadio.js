import React from 'react';
import ZsRadioWrapper from './zsRadioStyle';

const ZsRadio = (props) => {
    const { label='Radio', value='', checked=false, onChange } = props;
    return (
        <ZsRadioWrapper>
            <div className="wrapper" onClick={() => onChange({target:{value:value}})}>
                <div className={checked ? "radioBtn radioActive" : "radioBtn"}></div>
                {label && label !== '' ? <div className="btnLabel">{label}</div> : null }
            </div>
        </ZsRadioWrapper>
    )
}

export default ZsRadio;