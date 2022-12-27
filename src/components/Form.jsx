import React, {useRef} from "react";
import LabledInput from "./LabledInput";
import ModalBox from "./ModalBox";
import {Outlet, useNavigate} from "react-router-dom";

const Form = (props) =>{
    const fullNameRegEx = /^[а-яА-ЯіїєІЇЄҐґ]+ [а-яА-ЯіїєІЇЄҐґ]\. [а-яА-ЯіїєІЇЄҐґ]\.$/;
    const idCardRegEx = /^[а-яА-ЯіїєІЇЄҐґ]{2} №[0-9]{6}$/;
    const facultyRegEx = /^[а-яА-ЯіїєІЇЄҐґ]{4}$/;
    const dateOfBirthRegEx = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
    const addressRegEx = /^м\. [а-яА-ЯіїєІЇЄҐґ]+$/;
    const full_name_ref= useRef(null);
    const id_card_ref= useRef(null);
    const faculty_ref= useRef(null);
    const date_of_birth_ref= useRef(null);
    const address_ref= useRef(null);
    const modalBox = useRef(null);
    const fields = [full_name_ref, id_card_ref, faculty_ref, date_of_birth_ref, address_ref]
    function getValueFromRef(ref) {
        return ref.current.inputRef.current.value
    }
    const onSubmit = (e) => {
        let isAllValid = true
        e.preventDefault()
        for (let i = 0; i < fields.length; i++) {
            if (!fields[i].current.isValid()) {
                isAllValid = false
            }
        }
        if(isAllValid){
            modalBox.current.setState({
                fullName: getValueFromRef(full_name_ref),
                idCard: getValueFromRef(id_card_ref),
                faculty: getValueFromRef(faculty_ref),
                dateOfBirth: getValueFromRef(date_of_birth_ref),
                address: getValueFromRef(address_ref)
            })
            modalBox.current.show()
        }
    };
    return(
        <div className="container">
            <ModalBox ref={modalBox}/>
        <section id="task1-display" className="wrapper">
            <div className="heading">
                <h1 className="text text-large">Registration Form</h1>
            </div>
            <form name="signin" className="form" onSubmit={onSubmit} noValidate>
                <LabledInput labelText={"Full Name"} name={"full_name"} placeholder={"ТТТТТТ Т.Т."} regEx={fullNameRegEx} ref={full_name_ref}/>
                <LabledInput labelText={"ID-card"} name={"id_card"} placeholder={"ТТ №ЧЧЧЧЧЧ"} regEx={idCardRegEx} ref={id_card_ref}/>
                <LabledInput labelText={"Faculty"} name={"faculty"} placeholder={"ТТТТ"} regEx={facultyRegEx} ref={faculty_ref}/>
                <LabledInput labelText={"Date Of Birth"} name={"date_of_birth"} placeholder={"ЧЧ.ЧЧ.ЧЧЧЧ"} regEx={dateOfBirthRegEx} ref={date_of_birth_ref}/>
                <LabledInput labelText={"Address"} name={"address"} placeholder={"м. ЧЧЧЧЧЧ"} regEx={addressRegEx} ref={address_ref}/>
                <div className="input-control">
                    <input type="submit" id="submit_button" name="submit" className="input-submit" value="Submit" />
                </div>
            </form>
        </section>
        </div>
    )
}

export default Form
