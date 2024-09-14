const homeQuantityToggle=(event,id,stock)=>{

    const currentCardElement=document.querySelector(`#card${id}`)

    const productQuantity=currentCardElement.querySelector('.productQuantity')
    // console.log(productQuantity);
    let quantity=parseInt(productQuantity.getAttribute('data-quantity'))|| 1
  

    if(event.target.className==='cartIncrase'){
        if(quantity<stock){
            quantity +=1
        }
        else if(quantity=== stock){
            quantity=stock
        }
    }
    if(event.target.className==='cartDecrease'){
        if(quantity>1){
            quantity -=1
        }
       
    }
  
    
    productQuantity.innerText=quantity
    productQuantity.setAttribute('data-quantity',quantity)
    // console.log(quantity);
    return quantity
}
export default homeQuantityToggle