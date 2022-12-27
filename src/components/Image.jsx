import React, {useRef, useState} from "react";
import placeImage from "../images/SharmView.jpg";

const Image = (props) => {
    return (
        <div>
            <a href="http://sharm-el-sheikh.com/">
                <div id="img_container">
                    <img id="img" src={placeImage}/>
                </div>
            </a>
        </div>
    )
}

export default Image