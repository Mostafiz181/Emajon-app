import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Carts/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])




    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();

        const saveCart = [];
       

        for(const id in storedCart){
            const saveProduct = products.find(product=> product.id === id);
            if(saveProduct){
                const quantity= storedCart[id];
                saveProduct.quantity = quantity;
                saveCart.push(saveProduct)

                

            }

            // console.log( 'saveProduct',saveProduct)
        }
        setCart(saveCart)

    },[products])






    const handleAddToCart =(product)=>{

        // const newCart = [...cart, product]

        let newCart = [];

        // if product doesn't exist in the cart, then set quantity = 1 
        // if product exists then the product quantity update by 1.
        const exists = cart.find(pd=>pd.id === product.id)

        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }else{
            exists.quantity= exists.quantity+1 ;
            const remaining = cart.filter(pd=> pd.id !== product.id);
            newCart = [...remaining, exists]

        }







        setCart(newCart)
       addToDb(product.id)



        
    }






    return (
        <div className='shop-container'>
            <div className='cart-item'>

                {
                products.map(product=> <Product
                key={product.id}

                product={product}
                handleAddToCart={handleAddToCart}
       
       
                
                ></Product>)
            }

            </div>

            <div className='shop-details'>

                <Cart cart = {cart}></Cart>


 
            

                

            </div>

            
        </div>
    );
};

export default Shop;