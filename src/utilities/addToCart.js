import { changeHeaderCartQty } from "./changeHeaderCartQty";
import { notifyError, notifySuccess } from "./notify";

const addToCart = (image, title, price, quantity) => {
    let items = [];
    const localStorageData = localStorage.getItem("shoppingCart");
    if (localStorageData) items = JSON.parse(localStorageData);
    const newCart = { image, title, price, quantity };
    const dataFilter = items.filter((item) => item.title === title);
    if (dataFilter.length === 1) {
      newCart.quantity = dataFilter[0].quantity + newCart.quantity;
    }

    const newItems = [
      ...[newCart],
        ...items.filter((item) => item.title !== title),  
      ];

      const cartCount = newItems.map(item=>item.quantity).reduce((a,b)=>a+b, 0);
      
      if (cartCount > 9) {
        changeHeaderCartQty();
        notifyError("Sorry! You can not add items more than 9.");
      }
      else {
        localStorage.setItem("shoppingCart", JSON.stringify(newItems));
        changeHeaderCartQty();
      notifySuccess(title + " is added to cart!");
      }
    };

    export { addToCart };

