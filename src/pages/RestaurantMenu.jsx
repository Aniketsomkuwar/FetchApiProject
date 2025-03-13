
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import RestaurantCategoryAccordion from "../components/RestaurantCategoryAccordian";
const RestaurantMenu = () => {
    const { resId } = useParams();

    const [resInfo, resItem, resCategory] = useRestaurantMenu(resId);

    const [belowSelected, setBelowSelected] = useState(false);
    const [resItemData, setResItemData] = useState();
    const [categoriesList, setCategoriesList] = useState();

    useEffect(() => {
        if (resItem) {
            setResItemData(resItem); // Initialize resItemData when resItem is available
        }

    }, [resItem]);




    const { name, avgRating, cuisines } = resInfo;

    const categories = resCategory.filter((category) => category.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');


    // const BelowHundred = () => {
    //     const belowLevel = 30000;
    //     if (resItem) {
    //         const filterArr = resItem.filter(
    //             (item) => item?.card?.info?.defaultPrice <= belowLevel
    //         );
    //         setResItemData(filterArr);
    //         setBelowSelected(true);
    //     }
    // }

    // const resetMenu = () => {
    //     if (resItem) {
    //         setResItemData(resItem);
    //         setBelowSelected(false);
    //     }
    // }
    return (
        <div>

            {resInfo.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="p-4">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-2">{name}</h1>
                        <h2 className="text-lg text-yellow-500 mb-1">⭐ {avgRating}</h2>
                        <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
                    </div>

                    {/* categories */}
                    <div>
                        <h1 className="text-gray-600 text-lg font-bold ">Categories</h1>
                        {categories.map((category, index) => (
                            <RestaurantCategoryAccordion key={index} resCategoryData={category} />
                        ))}
                    </div>

                    {/* <div>
                        <div className="flex items-center gap-5"><h1 className="text-2xl font-semibold">Menu</h1>
                            <button className="text-lg text-yellow-500 border-amber-200 border-2 p-2 rounded" style={belowSelected ? { backgroundColor: 'yellow' } : {}} onClick={!belowSelected ? () => BelowHundred() : () => resetMenu()}>{belowSelected ? 'Below 100 ❌' : 'Below 100'}</button></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {resItemData && resItemData.length > 0 ? (
                                resItemData.map((item) => (
                                    <ItemCard key={item?.card?.info?.id} item={item} />
                                ))
                            ) : (
                                <div className="col-span-full text-center p-4 text-gray-600">
                                    No items found in this restaurant.
                                </div>
                            )}
                        </div>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default RestaurantMenu;
