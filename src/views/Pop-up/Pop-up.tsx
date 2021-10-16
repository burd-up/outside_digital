import React, {useState} from "react";
import style from './Pop-up.module.css';
import {getEndPhrase, payment} from "../../utils/payment";
import MoneyInYear from "./MoneyInYear/MoneyInYear";

type propsType = {
    isOpen: boolean
    setIsOpen: (arg: boolean) => void
}

function PopUp(props: propsType) {

    const [salary, setSalary] = useState<any>()

    const [pays, setPays] = useState<Array<string>>([])

    const paysElement = pays.map((el, index) => {
        return <div>
            <MoneyInYear key={el} money={el} year={index}/>
            <div className={style.bottomLine}></div>
        </div>
    })

    return (
        <div className={props.isOpen ? style.wrapper : style.wrapper + ' ' + style.close}>
            <div className={style.popUp}>
                <div className={style.cross} onClick={() => props.setIsOpen(false)}></div>
                {/*заголовок и описание*/}
                <h1 className={style.title}>Налоговый вычет</h1>
                <p className={style.description}>
                    Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
                    налогового вычета составляет не более 13% от своего официального годового дохода.
                </p>
                {/*поле ввода зарплаты и заголовком и кнопкой "рассчитать"*/}
                <div className={style.blockInput}>
                    <p className={style.secondaryDescription}>Ваша зарплата в месяц</p>
                    <input type={"number"} onChange={(e) => setSalary(e.target.value)}
                           onKeyDown={(e) => {
                               if (e.keyCode === 13) {
                                   setPays(payment(salary ? salary : 0))
                               }
                           }}
                           className={style.input} placeholder={'Введите данные'}/>
                    <button className={style.textButton}
                            onClick={() => setPays(payment(salary ? salary : 0))}>Рассчитать
                    </button>
                </div>
                {/*взносы (если есть)*/}
                <div className={style.list}>
                    {pays.length ? <div>
                            <p className={style.secondaryDescription2}>Итого можете внести в качестве досрочных:</p>
                            {paysElement}</div>
                        : null}
                </div>
                {/*вопрос и две кнопки*/}
                <div className={style.question}>
                    <p className={style.secondaryDescription}>Что уменьшаем?</p>
                    <div>
                        <button className={style.buttonPayment}>Платеж</button>
                        <button className={style.buttonTerm}>Срок</button>
                    </div>
                </div>
                {/*кнопка добавить*/}
                <button className={style.mainButton}>Добавить</button>

            </div>
        </div>
    )
}

export default PopUp