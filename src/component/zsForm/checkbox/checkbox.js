import React from 'react';
import ZsCheckboxWrapper from './checkboxStyle';

const ZsCheckbox = (props) => {
    const { label='', value='', checked=false, onChange } = props;
    return (
        <ZsCheckboxWrapper>
            <div className="wrapper" onClick={() => onChange({target:{value:value}})}>
                <div className={checked ? "checkBtn checkActive" : "checkBtn"}></div>
                {label && label !== '' ? <div className="btnLabel">{label}</div> : null }
            </div>
        </ZsCheckboxWrapper>
    )
}

export default ZsCheckbox;