import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async ()=>{

    const loadedProducts = await fetch('products.json');
    const products= await loadedProducts.json();

    const storedCart = getShoppingCart();

    const saveCart = [];


    console.log(storedCart)

    for(const id in storedCart){
        const addedProduct = products.find(pd=> pd.id === id);
        if(addedProduct){
            const quantity = storedCart [id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
    }
    // console.log(products)
    return saveCart


}

export default cartProductsLoader;