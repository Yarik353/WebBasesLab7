import React from "react";
import laptopImage from "../images/laptop.jpg"
import phoneImage from "../images/phone.jpg"
import deskImage from "../images/desk.jpg"
import screenImage from "../images/screen.jpg"
import powerSupplyUnitImage from "../images/powerSupplyUnit.jpg"
import graphicsCardImage from "../images/graphicsCard.jpg"
import GoodsCard from "../components/GoodsCard";
const Lab7 = (props) =>{
    const goodsCards = [
        {image: laptopImage, name: "Laptop", price: 34000},
        {image: phoneImage, name: "Phone", price: 22400},
        {image: deskImage, name: "Desk", price: 1540},
        {image: screenImage, name: "Monitor", price: 8000},
        {image: powerSupplyUnitImage, name: "Power supply unit", price: 2350},
        {image: graphicsCardImage, name: "Graphics card", price: 15600},
    ]
    return(
        <div className={"goods-cards-container"}>
            <div className={"goods-cards-wrapper"}>
                {goodsCards.map((product, index) => (
                    <GoodsCard name={product.name} image={product.image} price={product.price} key={index}/>
                ))}
            </div>
        </div>
    )
}
export default Lab7