import { RATINGLOGO } from "../utils/constant";
import { DELIVERYLOGO } from "../utils/constant";
import { IMAGE_URL } from "../utils/constant";

export const RestroCard = (props) => {
  const { restroObj } = props;
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    restroObj?.info;

  return (
    <div className="restro-card">
      <img
        className="restro-food-logo"
        src={IMAGE_URL + cloudinaryImageId}
      ></img>
      <div className="restroname">
        {name + " " + avgRating}
        <img className="rating-star-logo" src={RATINGLOGO}></img>
      </div>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div className="costfortwo">{costForTwo}</div>
      <div className="deliveryTime">
        <img className="deliveryLogo" src={DELIVERYLOGO}></img>
        {sla.deliveryTime} Minutes
      </div>
    </div>
  );
};

export default RestroCard;
