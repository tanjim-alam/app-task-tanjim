import React, { useState } from 'react';
import "../productCard/productCard.css"
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

function ProductCard({ id, title, description, image }) {
    const [favouritePId, setFavouritePId] = useState(null);
    function handleFavorite(pId) {
        if (favouritePId == null) {
            setFavouritePId(pId)
        }
        else {
            setFavouritePId(null)
        }
    }
    return (
        <div className="card">
            <img style={{ width: "100%" }} src={image} />
            <div style={{ width: "100%" }} className='cardFooter'>
                <div className='b-titleBox'>
                    <span className="title">{title}</span>
                </div>
                <span className="s-titleBox">
                    <span className="title">{title}</span>
                    <button onClick={() => handleFavorite(id)} className='cardHeart'>{id == favouritePId ? <RiHeart3Fill className={id == favouritePId ? "favouriteClass" : ""} /> : <RiHeart3Line />}</button>
                </span>
                <div className="b-descBox">
                    <p className="prod-desc">{description}</p>{" "}
                    <button onClick={() => handleFavorite(id)} className='cardHeart'> {id == favouritePId ? <RiHeart3Fill className={id == favouritePId ? "favouriteClass" : ""} /> : <RiHeart3Line />}</button>
                </div>
                <div className="s-descBox">
                    <span className="prod-desc">{description}</span>{" "}
                </div>
            </div>
        </div>
    )
}

export default ProductCard