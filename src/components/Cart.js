import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  
  const cartItems = useSelector((store)=> { 
    return store.cart.items;
  })

  // const cartPrice = cartItems.reduce((acc, curr)=>{
  //    acc = acc + (curr.price/100 || curr.defaultPrice/100);
  // },0);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  return cartItems.length === 0 ? (<div className="cart"><h3>Please add some food to the Cart!!</h3></div>) : (
    <div>
       <div className="clear-cart"><button className="clear-cart-btn">Clear Cart</button></div>
      {
        cartItems.map(cartItem =>
        <div key={cartItem.id} className="cart-items">
           <div className="item-name"><h4>{cartItem.name}</h4></div>
           <div className="item-price"><h4>Rs. {cartItem.price/100 || cartItem.defaultPrice/100}</h4></div> 
           <div><button className="cart-btn">- ADD +</button></div>
        </div>)
      }
      <div className="seperator-res"/>
      <div className="cart-items cart-total"> 
        <div className="item-name"><h2>Total</h2></div>
        <div className="item-price"><button onClick={clearCartHandler}>Place an Order</button></div>
      </div>
    </div>
  );
};

export default Cart;
