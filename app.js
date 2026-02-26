const toppings = document.getElementsByClassName('topping');



for (const topping of toppings){
    topping.addEventListener("click", (topping) => {
    console.log(topping.target.innerText);
  })
}
