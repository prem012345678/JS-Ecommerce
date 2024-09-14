// import addToCart from "../Cart/addToCart"
import addToCart from "../addToCart"
import homeQuantityToggle from "../homeQuantityToggle"

const productConainer=document.querySelector('#productConainer')
const productTemplet=document.querySelector('#productTemplet')
const ShowProductContainer = (product) => {
  if(!product){
    return false
  }
  product.forEach((prods)=>{
    const{id,name,category,price,stock,image,description}=prods;
    const productclone=document.importNode(productTemplet.content,true)
    productclone.querySelector('#cardValue').setAttribute('id',`card${id}`)
    productclone.querySelector('.productName').textContent=name
    productclone.querySelector('.catogary').textContent=category
    productclone.querySelector('.productImage').src=image
    productclone.querySelector('.productPrice').textContent=`₹${price}`
    productclone.querySelector('.actualPrice').textContent=`₹${price*2}`
    productclone.querySelector('.productStock').textContent=stock
    productclone.querySelector('.productDescription').textContent=description

productclone.querySelector('.stockElement').addEventListener('click',(event)=>{
    homeQuantityToggle(event,id,stock)
})
productclone.querySelector('.add_to_cart').addEventListener('click',(event)=>{
    addToCart(event,id,stock)
})

    productConainer.append(productclone)
  })

}
export default ShowProductContainer
