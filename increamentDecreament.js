import getArryFromLocalStorage from "./getArryFromLocalStorage";
import { updateCartTotalPrice } from "./updateCartTotalPrice";

export const increamentDecreament = (event, id, stock, price) => {

    const currentCardElement = document.querySelector(`#card${id}`)

    let productQuantity = currentCardElement.querySelector('.productQuantity')
    let productPrice = currentCardElement.querySelector('.productPrice')

    let quantity = 1
    let localStoragePrice = 0
    let localStorageProduct = getArryFromLocalStorage()
    let existingProduct = localStorageProduct.find((currProd) => currProd.id === id)
    if (existingProduct) {
        quantity = existingProduct.quantity
        localStoragePrice = existingProduct.price
    }
    else {
        localStoragePrice = price
        price = price
    }

    if (event.target.className === 'cartIncrase') {
        if (quantity < stock) {
            quantity += 1
        }
        else if (quantity === stock) {
            quantity = stock
            localStoragePrice = stock * price
        }
    }
    if (event.target.className === 'cartDecrase') {
        if (quantity > 1) {
            quantity -= 1
        }

    }
    localStoragePrice = price * quantity
    localStoragePrice=Number(localStoragePrice.toFixed(2))

    let updatecart = { id, price:localStoragePrice, quantity }
    updatecart = localStorageProduct.map((prod) => {
        return prod.id === id ? updatecart : prod
    })
    localStorage.setItem('CartProductLocalStorage', JSON.stringify(updatecart))
    productQuantity.innerText=quantity
    productPrice.innerText=localStoragePrice
    updateCartTotalPrice()
}