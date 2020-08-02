import React from 'react';
import ZsRadioWrapper from './zsRadioStyle';
import { Form } from "react-bootstrap";
const ZsRadio = (props) => {
    const { label='Radio', value='', checked=false, onChange , id} = props;
    return (
        <ZsRadioWrapper>
            {/* <div className="wrapper" id = {id? id : ""} onClick={() => onChange({target:{value:value}})}>
                <div className={checked ? "radioBtn radioActive" : "radioBtn"} ></div>
                {label && label !== '' ? <div className="btnLabel">{label}</div> : null }
            </div> */}
            <div onClick={() => onChange({target:{value:value}})}>
            <Form.Check
            checked={checked}
            className={checked ? "form-check-input radioActive wrapper" : "form-check-input wrapper"}
          type="radio"
          label={label}
        //   name="formHorizontalRadios"
          id={id ? id : ""}
        />
        </div>
        </ZsRadioWrapper>
    )
}

export default ZsRadio;