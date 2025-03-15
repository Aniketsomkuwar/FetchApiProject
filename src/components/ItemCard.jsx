import { useDispatch } from "react-redux";

import { addItem } from "../features/cartSlice";


const ItemCard = ({ item }) => {

    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem(item?.card?.info));
    }
    return (
        <div
            key={item?.card?.info?.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
        >
            <div className="mb-4 border-b pb-4 flex justify-between">
                <div>
                    {/* Container for name and price */}
                    <h3 className="text-lg font-semibold mb-1">
                        {item?.card?.info?.name}
                    </h3>
                    <p className="text-gray-700">
                        Rs. {(item?.card?.info?.defaultPrice || item?.card?.info?.price || 0) / 100}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    {item?.card?.info?.isVeg ? '🟢' : '🔴'}
                    <div className=" bg-white border-red-500 border-2 rounded p-2 px-5 font-bold  mt-8 text-red-500 hover:bg-red-400 hover:text-white" onClick={() => handleAddItem()}>Add </div>
                </div>
            </div>

            {item?.card?.info?.description && (
                <div className="mb-4">
                    {/* Container for description */}
                    {item?.card?.info?.description ? (
                        <div className="mb-4">
                            {/* Container for description */}
                            <p className="text-sm text-gray-500 mb-1">
                                {/* Serving Size and Ingredients */}
                                {item?.card?.info?.description.split("|")[0]?.trim()}
                            </p>

                            {/* Calorie Information */}
                            {item?.card?.info?.description.includes("Kcal") && (
                                <p className="text-xs text-gray-400 mb-1">
                                    {item?.card?.info?.description
                                        .split("|")
                                        .find((str) => str.includes("Kcal"))
                                        ?.trim()}
                                </p>
                            )}

                            {/* Allergen Warnings */}
                            {item?.card?.info?.description.includes("Contains") && (
                                <p className="text-xs text-red-500">
                                    {item?.card?.info?.description
                                        .split("Contains")[1]
                                        ?.trim()}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div>
                            {/* Handle case where description is missing */}
                            <p className="text-sm text-gray-500 italic">
                                No description available.
                            </p>
                        </div>
                    )}
                </div>
            )}

            {item?.card?.info?.imageId && (
                <div>
                    {/* Container for image */}
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                        alt={item?.card?.info?.name}
                        className="rounded-md w-full object-cover aspect-square"
                    />

                </div>

            )}

        </div>
    )


}

export default ItemCard;