import React, {Component, createRef, useRef} from "react";
class Content extends Component{
    element1 = createRef()
    element2 = createRef()
    generateRandomColor(){
        return Math.floor(Math.random()*16777215).toString(16);
    }
    changeElement(element){
        element.current.style.backgroundColor ="#" + this.generateRandomColor();
        element.current.style.color ="#" + this.generateRandomColor();
    }
    render() {
        return(
            <div>
                <h2>Мусійчук Ярослав Сергійович</h2>
                <p>Місце народження: м. Буча, 9 травня 2002 року</p>
                <p>Освіта: НТУУ "КПІ", м Київ</p>
                <p>Хоббі:</p>
                <ul>
                    <li>Атлетика</li>
                    <li>Велоспорт</li>
                    <li>Гімнастика</li>
                    <li>Комп'ютерні ігри</li>
                </ul>
                <p>Улюблені фільми:</p>
                <ol>
                    <li ref={this.element1} onClick={(e)=>this.changeElement(this.element1)}>"Втеча із Шоушенка", 1994</li>
                    <li ref={this.element2} onClick={(e)=>this.changeElement(this.element2)}>"Великий куш", 2000</li>
                    <li>"Шерлок Холмс", 2009</li>
                    <li>"Пірати Карибського моря", 2003</li>
                </ol>
                <p>Шарм-еш-Шейх — місто в Єгипті і туристичний центр на Червоному морі. Розташоване на півдні Синайського
                    півострова, на північному узбережжі Червоного моря, при гирлі Акабської і Суецької заток. Населення
                    міста з передмістями — 55095 осіб (2015 р.).</p>
                <p>До 1967 року тут існувало маленьке поселення. З приєднанням Синаю до Ізраїлю 1967 р. ізраїльтяни
                    побудували місто Офіра з першими туристичним готелем. 1982 року Синай перейшов назад до Єгипту, уряд
                    якого продовжив зусилля по розвитку курорту. 1999 і 2000 року тут відбулися міжнародні близькосхідні
                    мирні перемовини. У липні 2005 року тут стався терористичний акт.</p>
            </div>
        )
    }
}
export default Content