import React from "react";
import style from './StartWindow.module.css';

type propsType = {
    isOpen: boolean
    setIsOpen: (arg: boolean) => void
}

function StartWindow(props: propsType) {
    return (
        <div className={props.isOpen? style.wrapper + ' ' + style.close : style.wrapper}>
            <button onClick={() => props.setIsOpen(true)} className={style.button}>Налоговый вычет</button>
        </div>
    )
}

export default StartWindow