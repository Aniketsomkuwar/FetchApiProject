import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
        resData?.info;

    return (
        <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
            <div className="card-img">
                <img
                    className="card-logo"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>
            <div className="card-data">
                <h3 className="res-name">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla?.slaString}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;