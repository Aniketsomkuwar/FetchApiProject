import { useState } from "react";
import ItemCard from "../components/ItemCard";
const RestaurantCategoryAccordion = (props) => {

    const { title, itemCards } = props.resCategoryData?.card?.card;
    const [clicked, setClicked] = useState(false);



    return (
        <div className="bg-gray-300 m-5 p-3 rounded-lg">
            <div className="flex  justify-between font-bold" onClick={() => {
                setClicked(!clicked);
            }}>
                <div className="title">
                    {title + " "}({itemCards.length})
                </div>
                <div className="arrow" >⬇️</div>
            </div>
            {clicked && <div className="cards pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {itemCards.map((item) => (
                    <ItemCard item={item} key={item?.info?.id} />
                ))}
            </div>}
        </div>
    );
};

export default RestaurantCategoryAccordion;
