import { useEffect, useState } from "react";
import { RATINGLOGO, RESTAURANT_URL } from "../utils/constant";
import { IMAGE_URL } from '../utils/constant';
import { useParams } from "react-router-dom";

const RestroInfo = () =>{
    
    //will give you resId used in link as a param by the react-router-dom library.
    const {resId} = useParams();

    //use State hook is used to declare state variables
    //and changes occurring in state will rerender the comp.
    const[resInfo,setResInfo] = useState([]);

    // useEffect hooks takes 2 parameters- 1 is the callback arrow function and 2nd is the dependency array
    // if the array is blank, is will call this callback function only once and renders comp once after the call
    // if the array is any variable, it will call callback function every time variable changes and rerenders the comp
    //
    useEffect(()=>{
        fetchRestroData();
    }, []);

    const fetchRestroData = async () =>{
        const data = await fetch(RESTAURANT_URL+resId);
        const json = await data.json();
        setResInfo(json?.data?.cards);
        console.log(json?.data?.cards);
    }

    return (
    <div className="restro-details-container">
        <div className="resInfo">
            <div className="res-name">{resInfo[0]?.card?.card?.info?.name}</div>
            <div className="res-header">
            <div>
            <div className="cuisines">{resInfo[0]?.card?.card?.info?.cuisines.join(", ")}</div>
            <div className="costfortwo">{resInfo[0]?.card?.card?.info?.costForTwoMessage}</div>
            <div className="area">{resInfo[0]?.card?.card?.info?.areaName}</div>
            </div>
            <div>
            <div className="rating-header">
                <div className="rating">
                <img className="rating-star-logo" src={RATINGLOGO}></img>
                <div className="avgRating">{resInfo[0]?.card?.card?.info?.avgRating}</div>
                </div>
                <div className="totalrating">{resInfo[0]?.card?.card?.info?.totalRatingsString}</div>
            </div>
            </div>
            </div>
        </div>
        <div className="dashed-line"></div>
        <div className="offerInfo-container">
        {
            resInfo[1]?.card?.card?.gridElements?.infoWithStyle.offers.map
            (
                offer=><div key={offer.info.offerIds} className="offer-info">
                    <div>
                    <img className="offer-img" src="https://icon2.cleanpng.com/20180405/gxq/kisspng-discounts-and-allowances-price-tag-sales-service-special-offer-5ac6b0206ca081.851887831522970656445.jpg"/>
                    </div>
                    <div>{offer.info.header}</div>
                    </div>
            )
        }
        </div>
        <div className="solid-line"></div>
        <div className="veg-filter">
            <div className="label-veg">Veg Only</div>
            <div>
        <label className="switch">
         <input type="checkbox"/>
         <span className="slider round"></span>
        </label>
        </div>
        </div>
        <div className="menuInfo">
                {
                resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (card) =>!((card?.card?.card?.title) && (card?.card?.card?.itemCards?.length>0))?<div></div> : <div className="menu-name" key={card?.card?.card?.title}>
                        <div className="title">{card?.card?.card?.title}({card?.card?.card?.itemCards?.length})</div>
                        {card?.card?.card?.itemCards?.map(
                        (menu)=>(
                        <div className="menu" key={menu?.card?.info?.id}>
                            <div>
                                <div>{menu?.card?.info?.name}</div>
                                <div>Rs.{menu?.card?.info?.price/100}</div>
                            </div>
                            <div className="menu-image-container">
                                <img className="menu-image" src={IMAGE_URL + menu?.card?.info?.imageId} />
                            </div>
                        </div>
                        )
                        )
                    }
                    <div className="seperator-res"/>
                    </div>
                )
            }
        </div>
    </div>
    )
}

export default RestroInfo