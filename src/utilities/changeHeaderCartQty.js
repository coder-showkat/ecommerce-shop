const changeHeaderCartQty = () => {
    document.getElementById('card-count').innerText = JSON.parse(localStorage.getItem("shoppingCart"))?.map(cart=>cart.quantity).reduce((a,b)=>a+b,0) || 0;
}

export { changeHeaderCartQty };

