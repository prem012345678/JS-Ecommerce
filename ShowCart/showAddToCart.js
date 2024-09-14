import product from '../API/product.json'
import getArryFromLocalStorage from '../getArryFromLocalStorage';
import { increamentDecreament } from '../increamentDecreament';
import quantityFromLS from '../quantityFromLS';
import removeCart from '../removeCart';
import { updateCartTotalPrice } from '../updateCartTotalPrice';

let localStorageProduct=getArryFromLocalStorage()
let filterProducts=product.filter((prods)=>{
    return localStorageProduct.some((currProds)=>{
        return prods.id===currProds.id
    })
})
const productContainer=document.querySelector('#productContainer')
const productTemplet=document.querySelector('#productTemplet')

const showCartProducr=()=>{
    filterProducts.forEach((currProds)=>{
        const{id,name,category,price,stock,image,description}=currProds;
        let productClone=document.importNode(productTemplet.content,true)

        let actualDataLS=quantityFromLS(id,price)
        

        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`)
        productClone.querySelector('.catogary').textContent=category
        productClone.querySelector('.productImage').src=image
        productClone.querySelector('.productName').textContent=name
        productClone.querySelector('.productPrice').textContent=actualDataLS.price
        productClone.querySelector('.productQuantity').textContent=actualDataLS.quantity

        productClone.querySelector('.removeToCartButton').addEventListener('click',()=>{
            removeCart(id)
        })
        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            increamentDecreament(event,id,stock,price)
        })
        productContainer.append(productClone)
    })
}

showCartProducr()

updateCartTotalPrice()