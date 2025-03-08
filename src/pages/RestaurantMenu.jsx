import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resData, setResData] = useState([]);
    const [itemCard, setItemCard] = useState([]);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1363614&lng=79.11340489999999&restaurantId=" + resId);
        const json = await data.json();

        setResData(json?.data?.cards[2].card?.card?.info);
        setItemCard(json?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

    }

    const { name, avgRating, cuisines } = resData;


    return (

        <div>
            {
                resData.length === 0 ? (
                    <Shimmer />) : (
                    <div id="restaurant-menu">
                        <div className="restaurant-info">
                            <h1 className="restaurant-name">{name}</h1>
                            <h2 className="restaurant-rating">⭐ {avgRating}</h2>
                            <h4 className="restaurant-cuisines">{cuisines.join(", ")}</h4>
                        </div>

                        <div className="menu-section">
                            <h1 className="menu-title">List of Food</h1>
                            <ul className="menu-list">
                                {itemCard.map((item) => (
                                    <li key={item?.card?.info?.id} className="menu-item">
                                        {item?.card?.info?.name} - {"Rs. " + item?.card?.info?.defaultPrice / 100}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                )
            }
        </div>
    )

}

export default RestaurantMenu;