
import getArryFromLocalStorage from "./getArryFromLocalStorage"

const quantityFromLS=(id,price)=>{
let cartPrduct=getArryFromLocalStorage()
// console.log(cartPrduct);
let quantity=1
let existingProduct=cartPrduct.find((currProd)=>currProd.id===id)

if (existingProduct) {
    quantity=existingProduct.quantity
    price=existingProduct.price
}
return {quantity,price}
}
export default quantityFromLS