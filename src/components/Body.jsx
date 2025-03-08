import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();


    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1363614&lng=79.11340489999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // Optional Chaining
        setListOfRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };

    return (<div className="body-container">
        <div className="search-container">

            <input
                type="text"
                id="search-box"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button id="search-btn"
                onClick={() => {
                    // Filter the restraunt cards and update the UI


                    const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilteredRestaurant(filteredRestaurant);
                }}
            >
                Search
            </button>


        </div>

        {listOfRestaurants.length === 0 ? (
            <Shimmer />) :
            <div className="card-container">
                {filteredRestaurant.length === 0 ? (
                    <h1 className="not-found">No Result Found</h1>
                ) : (
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                    ))
                )}
            </div>}
    </div>
    );
};

export default Body;