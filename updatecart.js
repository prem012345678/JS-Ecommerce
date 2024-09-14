const cartValue=document.querySelector('#cartValue')
let updatecart=(products)=>{
    
return cartValue.innerHTML=`<i class="fas fa-cart-shopping"><span>${products.length}</span></i>`
}
export default updatecart