import React from "react";

const GoodsCard = (props) =>{
    return(
        <div className="goods-card">
            <img className={"product-image"} src={props.image}/>
            <div className={"info-bar"}>
                <div className={"title"}>{props.name}</div>
                <div className={"price"}>Price: {props.price}UAH</div>
            </div>
        </div>
    )
}
export default GoodsCard
