// import getArryFromLocalStorage from "./LocalStorage/getArryFromLocalStorage"
import getArryFromLocalStorage from "./getArryFromLocalStorage"
import updatecart from "./updatecart"

const removeCart=(id)=>{
    let cartPrduct=getArryFromLocalStorage()
   cartPrduct= cartPrduct.filter((prod)=>prod.id !==id)
   localStorage.setItem('CartProductLocalStorage',JSON.stringify(cartPrduct))

   let removeDiv=document.querySelector(`#card${id}`)
   if (removeDiv) {
    removeDiv.remove()
   }
   updatecart(cartPrduct)
}
export default removeCart 