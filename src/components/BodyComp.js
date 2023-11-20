import RestroCard from "./Restrocard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [restrolist, setrestrolist] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let list = json?.data?.cards?.filter(
      (resList) => resList.card.card.id == "restaurant_grid_listing"
    );
    setrestrolist(list[0].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(
      list[0].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restrolist.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <div className="body-search-container">
        <button
          onClick={() => {
            setFilteredList(restrolist.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Rated
        </button>
        <input
          type="input"
          value={searchBy}
          onChange={(e) => {
            setSearchBy(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilteredList(
              restrolist.filter((index) =>
                index.info.name.toLowerCase().includes(searchBy.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="restro-container">
        {filteredList.map((restro) => (
          <Link to={"/restaurant/"+restro.info.id} key={restro.info.id}><RestroCard restroObj={restro} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
