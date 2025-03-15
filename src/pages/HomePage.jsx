import RestaurantCard, { withOpenLabel } from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
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

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    return (
        <div className="p-4">
            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2 flex-grow"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
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
                <Shimmer />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                    {filteredRestaurant.length === 0 ? (
                        <h1 className="text-center text-lg font-semibold text-gray-600">
                            No Result Found
                        </h1>
                    ) : (
                        filteredRestaurant.map((restaurant) => (
                            <Link
                                key={restaurant.info.id}
                                to={"/restaurant/" + restaurant.info.id}
                            >
                                {restaurant.info.sla.deliveryTime <= 35 ? (
                                    <RestaurantCardOpen resData={restaurant} />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )}
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Body;
