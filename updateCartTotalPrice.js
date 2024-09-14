import getArryFromLocalStorage from "./getArryFromLocalStorage"

const produttSubTotal=document.querySelector('.produttSubTotal')
const productFinalTotal=document.querySelector('.productFinalTotal')
export const updateCartTotalPrice=()=>{
    let localStorageProduct=getArryFromLocalStorage()

    let productPrice=localStorageProduct.reduce((accum,currElm)=>{
        let totalPrice=parseInt(currElm.price)
        return accum+totalPrice
    },0)
// console.log(productPrice);
produttSubTotal.textContent=`₹${productPrice}`
productFinalTotal.textContent=`₹${productPrice+50}`
}