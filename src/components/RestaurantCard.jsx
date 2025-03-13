import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, locality } = resData?.info;


    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-4 h-full">
            <div className="mb-4">
                <img
                    className="w-full h-40 object-cover rounded-md"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <h4 className="text-gray-600 mb-1">{cuisines.join(", ")}</h4>
                <h4 className="text-yellow-500 mb-1">{avgRating} stars</h4>
                <h4 className="text-gray-600 mb-1">{costForTwo}</h4>
                <h4 className="text-gray-600 mb-1">{sla?.slaString}</h4>
                <h4 className="text-gray-600">Address: {locality}</h4>
            </div>
        </div>
    );
};

export const withOpenLabel = (RestaurantCard) => {


    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-600 rounded text-white ms-0 mt-0 m-2 p-1">Delivery : 35 Min</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;