import React, {useRef, useState} from "react";
import placeImage from "../images/SharmView.jpg";
import Image from "./Image";

const ImageContainer = (props) => {
    let Scale =1;
    const [imgCounter, setImgCounter] = useState(1)
    const zoomIn=()=>{
        let img = document.querySelectorAll('#img');
        if(Scale<=3){
            Scale += 0.1
            if (img.length > 0){
                img.forEach(i => {i.style.scale = Scale;})
            }
        }
    }

    const zoomOut=()=>{
        let img = document.querySelectorAll('#img');
        if(Scale>1){
            Scale -= 0.1
            if (img.length > 0){
                img.forEach(i => {i.style.scale = Scale;})
            }
        }
    }

    const addImg=()=>{
        setImgCounter(imgCounter+1)
    }

    const removeElement=()=>{
        if(imgCounter!==0){
            setImgCounter(imgCounter-1)
        }
    }
    const images = [];
    for (let i=0; i<imgCounter; i++){
            images.push(Image());
    }
    return (
        <div>
            <div className={"img-buttons"}>
                <button type="button" onClick={addImg} className={"img-button"}>Додати</button>
                <button type="button" onClick={zoomIn} className={"img-button"}>Збільшити</button>
                <button type="button" onClick={zoomOut} className={"img-button"}>Зменшити</button>
                <button type="button" onClick={removeElement} className={"img-button"} id="delete">Видалити</button>
            </div>
            {images}
        </div>
    )
}

export default ImageContainer