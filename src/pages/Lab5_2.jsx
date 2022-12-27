import React, {useRef, useState} from "react";
import {SketchPicker} from "react-color";
const Lab5_2 = (props) =>{
    const colorPicker = useRef(null);
    const variantCell = useRef(null);
    const lastCell = useRef(null);
    const [state, updateState] = useState('#4bab77')
    const handleChangeComplete = (e) =>{
        updateState(e.target.value)
    }
    const handleMouseOver = (e) =>{
        variantCell.current.style.backgroundColor  = "#" + randomColor();

    }
    const handleClick = (e) =>{
        variantCell.current.style.backgroundColor = colorPicker.current.value

    }
    const handleDoubleClick = (e) =>{
        variantCell.current.style.backgroundColor  = "#" + randomColor();
        lastCell.current.style.backgroundColor  = "#" + randomColor();

    }
    const randomColor = () =>{
        return Math.floor(Math.random()*16777215).toString(16);
    }
    return(
        <div className="container">
        <section id="task2-display" className="wrapper">
            <h1>Table</h1>

            <input id="color-picker" ref={colorPicker} type="color" value={state} onChange={handleChangeComplete}/>
            <table>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>

                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td id="variant-cell" onDoubleClick={handleDoubleClick} onMouseOver={handleMouseOver} onClick={handleClick} ref={variantCell}>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td id="change-cell" ref={lastCell}>31</td>
                    <td>32</td>
                    <td>33</td>
                    <td>34</td>
                    <td>35</td>
                    <td>36</td>
                </tr>
                </tbody>
            </table>
        </section>
        </div>
    )
}

export default Lab5_2