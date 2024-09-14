
import updatecart from "./updatecart";

const getArryFromLocalStorage=()=>{
let cartProduct=localStorage.getItem('CartProductLocalStorage')
if (!cartProduct) {
    return [];
}
cartProduct=JSON.parse(cartProduct)
// console.log(cartProduct);
updatecart(cartProduct)
return cartProduct

}
export default getArryFromLocalStorage