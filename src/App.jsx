import { useEffect, useState } from 'react';
import ProductList from './assets/components/ProductList';
import React from 'react';
import Cart from './assets/components/Cart';






function App() {
const [baseUrl, setBaseUrl]=useState('https://fakestoreapi.com/products')
const [products, setProducts]= useState([])
//const [url, setUrl]= useState("")
const [error, setError]= useState("")
const [cart, setCart]=useState([])


const addCart=(product)=>{
setCart((prev)=>[...prev, product])
console.log(cart.length, product.id)
}

const deleteCart=()=>{

}

  

  

const getTotal = (cart) =>{
 const totalPrice=cart.reduce((acum, curr)=>acum + Number(curr.price), 0)
  return totalPrice.toFixed(2);
}


const getDerivedCart = () =>{
const derivedCart=[];
cart.forEach((item)=>{
const existingItem= derivedCart.find((dItem)=>dItem.id===item.id)
if(existingItem){
  existingItem.quantity++;
  existingItem.totalPrice+= Number(item.price);
}else{
  derivedCart.push({

    id: item.id,
    name: item.title,
    quantity:1,
    totalPrice: Number(item.price),
  }
  );
}
});
return derivedCart;

}
   

 useEffect(()=>{
  fetch(baseUrl)
  .then(res=>{
    if(!res.ok) throw new Error(`${res.status}.${res.statusText}`);
    setError("");
    return res.json();
  })
  .then(data=>setProducts( data))
  .catch(error=>setError(error.toString()));
  },[]);
  
if(!products.length && !error)return <h2>Loading...</h2>
if(error) return (
<h2>{error}</h2>
);  

return (

    <>
    <div className='mainContainer'>
    <header className='headerContainer'>

<h3>{`Productos agregados al carrito: ${cart.length}  Precio total: $:${getTotal(cart)}`}</h3>
<Cart cart={getDerivedCart()}/>
</header>
<div>
<ProductList products={products} addCart={addCart} deleteCart={deleteCart} />
</div>
    </div>
 
    </>
  )

}
export default App
