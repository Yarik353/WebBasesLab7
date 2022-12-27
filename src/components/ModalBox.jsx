import React, {Component} from "react";
import {useEffect} from 'react';
class ModalBox extends Component{
    constructor(props) {
        super(props);
        this.modal = React.createRef()
        this.closeSpan = React.createRef()
        this.state = {
            fullName: null,
            idCard: null,
            faculty: null,
            dateOfBirth: null,
            address: null
        }
    }
    show(){
        this.modal.current.style.display = "block";

    }
    close(){
        this.modal.current.style.display = "none";
    }

    render() {
        return(
            <div ref={this.modal} onClick={(e) => this.close()} className="modal">
                <div className="container">
                    <section id="task1-display" className="wrapper">
                        <span ref={this.closeSpan} onClick={(e) =>this.close()} className="close">&times;</span>
                        <div className="heading">
                            <h1 className="text text-large">Man</h1>
                        </div>
                        <ul>
                            <li>Full Name: {this.state.fullName}</li>
                            <li>Id Card: {this.state.idCard}</li>
                            <li>Faculty: {this.state.faculty}</li>
                            <li>Date Of Birth: {this.state.dateOfBirth}</li>
                            <li>Address: {this.state.address}</li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }}
export default ModalBox

