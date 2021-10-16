import React, {useState} from "react";
import style from './MoneyInYear.module.css';
import {getEndPhrase} from "../../../utils/payment";
import vector from '../../../media/images/Vector.svg'

type propsType = {
    money: string
    year: number
}

function MoneyInYear(props: propsType) {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={style.wrapper}>
            {/*стилизованный чекбокс*/}
            <div className={isActive ? style.fakeCheckBox + ' ' + style.active : style.fakeCheckBox}>
                <img src={vector}/>
            </div>
            <input onClick={() => setIsActive(!isActive)}
                   className={style.checkBox}
                   type={"checkbox"}/>
            {/*сколько можно погасить*/}
            <p className={style.mainText}>
                {props.money}
                <span className={style.secondaryText}>{getEndPhrase(props.year + 1)}</span>
            </p>
        </div>

    )
}

export default MoneyInYear