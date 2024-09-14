import getArryFromLocalStorage from "./getArryFromLocalStorage"
import updatecart from "./updatecart"
getArryFromLocalStorage()
const addToCart=(event,id,stock)=>{

    let arryLocalStorage=getArryFromLocalStorage()
  
    

    let currentCart=document.querySelector(`#card${id}`)
    let price=currentCart.querySelector('.productPrice').innerText
    let quantity=currentCart.querySelector('.productQuantity').innerText
   price= price.replace('₹','')  

//    step-2

   let existingProduct=arryLocalStorage.find((curProd)=>curProd.id===id)

  
   
if (existingProduct && quantity>1) {
    quantity=Number(existingProduct.quantity)+Number(quantity)
    price=Number(price*quantity)
    
    let updatecart={id,price,quantity}
  updatecart=arryLocalStorage.map((prod)=>{
       return prod.id===id? updatecart:prod
    })
    localStorage.setItem('CartProductLocalStorage',JSON.stringify(updatecart))
}


if (existingProduct) {
    return false
}

// step-1

    price=Number(quantity*price ) 
    quantity=Number(quantity)
    // console.log(price,quantity);

    arryLocalStorage.push({ id, price, quantity })
    localStorage.setItem('CartProductLocalStorage',JSON.stringify(arryLocalStorage))
    updatecart(arryLocalStorage)
}
export default addToCart