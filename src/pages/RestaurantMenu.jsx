
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RestaurantCategoryAccordion from "../components/RestaurantCategoryAccordion";
const RestaurantMenu = () => {
    const { resId } = useParams();

    const [resInfo, resCategory = []] = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState();

    const { name, avgRating, cuisines } = resInfo;

    const categories = resCategory?.filter?.((category) => category.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') || [];



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
                            <RestaurantCategoryAccordion key={index} resCategoryData={category} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantMenu;
