import { useState } from "react";
import ItemCard from "./ItemCard";
const RestaurantCategoryAccordion = ({ resCategoryData, showItems, setShowIndex }) => {

    const { title, itemCards } = resCategoryData?.card?.card;

    const handleShowItems = () => {
        setShowIndex();
    }
    return (
        <div className="bg-gray-300 m-5 p-3 rounded-lg">
            <div className="flex  justify-between font-bold" onClick={() => handleShowItems()}>
                <div className="title">
                    {title + " "}({itemCards.length})
                </div>
                <div className="arrow" >⬇️</div>
            </div>
            {showItems && <div className="cards pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {itemCards.map((item, index) => (
                    <ItemCard item={item} key={index} />
                ))}
            </div>}
        </div>
    );
};

export default RestaurantCategoryAccordion;
