import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  //react hooks variable
  const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className= "body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            //console.log("button clicked");
            const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.4);
            setRestaurantList(filteredList);
          }}>
            Top Rated Restaurant
          </button>
            </div>
            <div className = "res-container">
          {restaurantList.map((restaurant) => (
                    <ResturantCard key={restaurant.info.id} resData={restaurant}/>
                    )
                )
            }
            </div>
        </div>
    );
};

export default Body;