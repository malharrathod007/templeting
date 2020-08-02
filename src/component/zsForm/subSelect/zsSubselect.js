import React, { useState, useEffect } from 'react';
import ZsSelectWrapper from './zsSubselectstyle';
const ZssubSelect = (props) => {
    const { id, data = [], onChange = () => { }, selected = '', disabled = false, classList = '', title = "" } = props;

    const [menuStatus, setMenuStatus] = useState(false);

    const [value, setValue] = useState(title);

    useEffect(() => {
        window.addEventListener("mousedown", e => {
            if (menuStatus === true) {
                if (document.getElementById(id) !== null) {
                    if (document.getElementById(id).contains(e.target)) {
                        //setMenuStatus(false)
                    } else {

                        setMenuStatus(!menuStatus);
                    }
                }
            }
        });
    });
    const showMenu = () => {
        setMenuStatus(!menuStatus)
    }

    const changeOption = (d) => {
        setValue(d.name);
        onChange(d.value ? d.value : d.name);
        showMenu();
    }
    return (
        <ZsSelectWrapper id={id}>
            <div className={disabled ? "zsSelectControl isDisabled" + classList : "zsSelectControl" + classList} onClick={showMenu}>
                <div className="selectedVal">{value}</div>
                <div className="zsDropArrow"></div>
            </div>
            <div className={menuStatus ? "selectMenu menuOpen" : "selectMenu"}>
                <div className="menuContent">
                    {data.map((d, i) => (
                        <div className={selected === d.value ? "option selectedOpt" : "option"} onClick={() => changeOption(d)} key={i}>{d.name}</div>
                    ))}
                </div>
            </div>
        </ZsSelectWrapper>
    )
}

export default ZssubSelect;