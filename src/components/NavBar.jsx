import React, {Component} from "react";
import {Link} from "react-router-dom";
class NavBar extends Component {
        task10 = React.createRef()
        task11 = React.createRef()
        task12 = React.createRef()
        task2 = React.createRef()

    setActive(e){
        this.task10.current.className = "tab"
        this.task11.current.className = "tab"
        this.task12.current.className = "tab"
        this.task2.current.className = "tab"
        e.currentTarget.className = "active-tab"
    }

    render() {
        return (
            <nav className='navigation_bar'>
                <ul>
                    <li id="task10" ref={this.task10} onClick={(e) => this.setActive(e)} className="active-tab">
                        <Link className={"nav_btn"} to={"/"}>Lab4</Link>
                    </li>
                    <li id="task11" ref={this.task11} onClick={(e) => this.setActive(e)} className="tab">
                        <Link className={"nav_btn"} to={"/task11"}>Lab5.1</Link>
                    </li>
                    <li id="task12" ref={this.task12} onClick={(e) => this.setActive(e)} className={"tab"}>
                        <Link className={"nav_btn"} to={"/task12"}>Lab5.2</Link>
                    </li>
                    <li id="task2"  ref={this.task2} onClick={(e) => this.setActive(e)} className={"tab"}>
                        <Link className={"nav_btn"} to={"/task2"}>Task2</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default NavBar