import React, {useContext} from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cartItem';
import "./cart.css"

export const Cart = () => {
    const {cartItems, getTotalCartAmount, deleteAllItems} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    let isAllZero = true;
     
    for(let i = 0; i < PRODUCTS.length+1; ++i) {
      if(cartItems[i] !== 0) {
        isAllZero = false;
        break;
      };
    };

    return (
      <div className='cart'>
          <div>
              <h1>Your Cart Items</h1>
          </div>
          <div className='cartItems'>
              {PRODUCTS.map((product) => {
                  if(cartItems[product.id] !== 0){
                    return <CartItem data={product} />
                  }
              })}
          </div>
          <div className="checkout">
            {isAllZero ? <h1>Cart Is Empty</h1> : <button className='deleteAll' onClick={deleteAllItems}>Delete All</button>}
            <p>Subtotal: ${totalAmount}</p>
          </div>
          
      </div>
    )
}


