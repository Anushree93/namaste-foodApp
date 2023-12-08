import { RATINGLOGO, IMAGE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice';

const RestroInfo = () =>{
    
    //will give you resId used in link as a param by the react-router-dom library.
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const dispatch = useDispatch();
    
    const onAddHandler = (item) => {
       dispatch(addItem(item));
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
         <input type="checkbox" onChange={()=>{
            const filteredList = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card=>{
                card?.card?.card?.itemCards?.filter(ic => {ic?.card?.info?.itemAttribute.vegClassifier ==='NONVEG'})
            });
            console.log(filteredList);
         }}/>
         <span className="slider round"></span>
        </label>
        </div>
        </div>
        <div className="menuInfo">
                {
                resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                    (card) =>!((card?.card?.card?.title) && (card?.card?.card?.itemCards?.length>0))?<div></div> : 
                    <div className="menu-name" key={card?.card?.card?.title}>
                        <div className="title">{card?.card?.card?.title}({card?.card?.card?.itemCards?.length})</div>
                        {card?.card?.card?.itemCards?.map(
                        (menu)=>(
                        <div className="menu" key={menu?.card?.info?.id}>
                            <div>
                                <div>{menu?.card?.info?.name}</div>
                                <div>Rs.{menu?.card?.info?.price/100}</div>
                                <div>{menu?.card?.info?.itemAttribute?.vegClassifier}</div>
                            </div>
                            <div className="menu-image-container">
                                <div>
                                <button className="menu-addBtn" onClick={()=>onAddHandler(menu?.card?.info)}>Add+</button>
                                </div>
                                <div>
                                <img className="menu-image" src={IMAGE_URL + menu?.card?.info?.imageId} />
                                </div>
                                
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