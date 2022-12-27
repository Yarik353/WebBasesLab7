import React, {Component} from "react";
import {useEffect} from 'react';
class LabledInput extends Component{
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.errorRef = React.createRef()
    }
    isValid(){
        if(this.props.regEx.test(this.inputRef.current.value)){
            this.errorRef.current.innerHTML = ''
            return true;
        }
        else{
            this.errorRef.current.innerHTML = 'дані мають бути записані у наступній формі: ' + this.props.placeholder;
            return false;
        }
    }

    render() {
        return(
        <div className={"input-area"}>
            <div className={"input-control"}>
                <label>{this.props.labelText}:</label>
                <input type={"text"} name={this.props.name} ref={this.inputRef} className={"input-field"} placeholder={this.props.placeholder}/>
            </div>
            <div className={"error_msg"} ref={this.errorRef}></div>
        </div>
    )
}}
export default LabledInput

