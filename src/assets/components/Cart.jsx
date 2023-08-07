import React from 'react'

function Cart ({cart}) {
  return cart.length?(
   
    <div  className="cartAdd">
       <ul>
          {cart?.map((prod)=><li key={prod.id}>{prod.name} x {prod.quantity} ${prod.totalPrice}</li>)}
       </ul>

    </div>
  ):null;
}


export default Cart