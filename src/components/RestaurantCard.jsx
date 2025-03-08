import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const { title = "name", price = "0", images = "0" } = props.data;


    return (

        <div className="card">
            <div className="card-img"><img className="card-logo" src={images[0]} alt="" /></div>
            <div>
                <div className="res-name"><h3>{title}</h3></div>
                <div className="res-star">
                    {price}
                </div>

            </div>
        </div>

    )
}

export default RestaurantCard;