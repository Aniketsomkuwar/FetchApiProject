import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        setProducts(json.products);
        setAllProducts(json.products)
    }



    return (
        <div className="body-container">
            <div className="search-container">
                <input type="search" id="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button id="search-btn" onClick={() => {

                    setProducts(allProducts.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase())));


                }}>Search</button>
            </div>
            <div>
                {
                    products.length !== 0 ? <div className="card-container">
                        {products.map((product) => (
                            <RestaurantCard data={product} key={product.id} />
                        ))}
                    </div> : <Shimmer />
                }
            </div>

        </div>
    );
};

export default Body;
