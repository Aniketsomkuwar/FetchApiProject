import { useState } from "react";
import { useEffect } from "react";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);
    // const [resItem, setResItem] = useState([]);
    const [resCategory, setResCategory] = useState([]);

    useEffect(() => {
        fetchData();
    }, [resId])


    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1363614&lng=79.11340489999999&restaurantId=" + resId);
        const json = await data.json();

        setResCategory(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards || []);

        setResInfo(json?.data?.cards[2].card?.card?.info || []);
        // setResItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

    }
    return [resInfo, resCategory];
}

export default useRestaurantMenu;