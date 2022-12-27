import React from "react";

import Content from "../components/Content";
import ImageContainer from "../components/ImageContainer";
const Lab4 = (props) =>{
    return(
        <div className="home-container">
        <section  className="home-display">
            <Content/>
            <ImageContainer/>
        </section>
        </div>
    )
}

export default Lab4