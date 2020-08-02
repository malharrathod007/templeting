import React from 'react';
import ZsInputWrapper from './zsInputStyle';
import { useState } from "react";
import Icons from "../../icons/icons";
const ZsInput = (props) => {
    const [pwShow, setPwShow] = useState(false);
    const { disabled = false, password, id, pattern, classList, placeholderMain, haveTranspatrentBg, placeholder, panel, maxLength, wrapStyle, ...rest } = props;
    const { value } = rest;
    const { eid } = "zsInput" + Math.random();
    // const [clickdiv,setClickdiv]=useState(false)
    let clist = ['zsInput'];
    if (disabled) {
        clist.push('disabledInput');
    }
    if (value && value !== '') {
        clist.push("fillBox");
    }
    const emailInput = React.createRef();
    const callThis = () => {
        emailInput.current.focus();
    }
    const visiblePassword = (type) => {
        let x = document.getElementById(type);
        if (x.type === "password") {
            x.type = "text";
            setPwShow(true);
        } else {
            x.type = "password";
            setPwShow(false);
        }
    }
    return (
        <ZsInputWrapper className={classList} style={wrapStyle} onClick={() => callThis()}>
            <input placeholder={placeholderMain} className={clist.join(' ')} id={id ? id : eid} autoComplete="off" maxLength={maxLength ? maxLength : ""}  {...rest} ref={emailInput} pattern={pattern ? pattern : ''}
                style={{
                    background: haveTranspatrentBg ? "#02171f" : "transparent", boxShadow: "none", outline: "none",
                    border: panel ? "none" : ""
                }} />
            {placeholder ? <span style={{
                background: haveTranspatrentBg ? "rgb(2, 23, 31)" : "#06202d",
                outline: "none !important",
                border: "none", cursor: "auto",
            }} className="plcHldr btn"  >{placeholder}</span> : null}
            {password ?
                (pwShow) ?
                    <Icons type="openeye" height={20} width={20} onClick={() => { visiblePassword(id) }} style={{ position: "absolute", right: "10px", top: "8px", cursor: "pointer" }} /> :
                    <Icons type="eye" height={20} width={20} onClick={() => { visiblePassword(id) }} style={{ position: "absolute", right: "10px", top: "8px", cursor: "pointer" }} /> :
                ''}
        </ZsInputWrapper>
    )
}
export default ZsInput;
