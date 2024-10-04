const specialSurprise = () => {
    document.getElementById("special-surprise").style.display = "block"
}

// document.getElementById("add-pizza").addEventListener("click", () => {

//   document.getElementById("special-surprise").style.display = "block"
const addPizza = () => {
    // const li = document.createElement('li');
    // li.appendChild(document.createTextNode(str))
    // li.innerHTML += 'hello!';
    // document.getElementById('order-list').appendChild(li)
    // alert('this works')
    // document.getElementById("special-surprise").style.display = "block"
    const ol = document.getElementById('order-list');
    ol.innerHTML += `<li class="pizza-li">
                    <div class="pizza-div">
                        <div class="pizza-header">
                            <img class="pizza-photo" src="images/profile.jpg" alt="pizza photo">
                        </div>
                        <div class="pizza-main">
                            <ol class="pizza-options">
                                <li class="option">
                                    <select class="option-select">
                                        <option>Cheese</option>
                                        <option>Pepperoni</option>
                                        <option>Sausage</option>
                                        <option>Hawaiian</option>
                                    </select>
                                </li>
                                <li class="option">
                                    <select class="option-select">
                                        <option>Wee</option>
                                        <option>Mid</option>
                                        <option>Big</option>
                                        <option>X-big</option>
                                    </select>
                                </li>
                                <li class="option">
                                    <select class="option-select">
                                        <option>Regular</option>
                                        <option>Pretzel</option>
                                        <option>Deep Dish</option>
                                        <option>Garlic</option>
                                        <option>Cheesy</option>
                                        <option>Gluten-Free</option>
                                    </select>
                                </li>
                                <li class="option">
                                    <select class="option-select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </li>
                            </ol>
                        </div>
                        <div class="pizza-cost">
                            <p class="cost-display">Cost: $0</p>
                        </div>
                        <div class="delete">
                            <button class='add-to-cart' onclick=calculatePizzaCost()>
                                <img class="delete-photo" src="images/profile.jpg">
                            </button>
                        </div>
                    </div>
                </li>`;
}

// const getPizzaOptions = () => {
// alert('This function was called!');
// const options = pizzaDiv.querySelector('.pizza');
// alert('Hey');

// }

// const pizzaDiv = document.querySelector('.pizza');
// alert(pizzaDiv);
// const selectedOptions = getPizzaOptions(pizzaDiv);
// alert(selectedOptions);

const options = document.getElementsByClassName('option-select');
const costDisplay = document.getElementsByClassName('cost-display');
const totalCostDisplay = document.getElementById('order-total');
let totalCost = 0;

const prices = {
    type: { 'Cheese': 8, 'Pepperoni': 9, 'Sausage': 10, 'Hawaiian': 11 },
    size: { 'Wee': 0, 'Mid': 1, 'Big': 2, 'X-big': 3 },
    crust: { 'Regular': 0, 'Pretzel': 1, 'Deep Dish': 2, 'Garlic': 1, 'Cheesy': 2, 'Gluten-Free': 0 },
    quantity: { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
};

const calculatePizzaCost = () => {
    alert(totalCostDisplay.innerHTML());
    const type = options[0].value.trim();
    const size = options[1].value.trim();
    const crust = options[2].value.trim();
    const quantity = options[3].value.trim();

    const typeCost = prices.type[type] || 0;
    const sizeCost = prices.size[size] || 0;
    const crustCost = prices.crust[crust] || 0;
    const quantityValue = prices.quantity[quantity] || 0;

    const costForThisPizza = (typeCost + sizeCost + crustCost) * quantityValue;
    totalCost += costForThisPizza;
    costDisplay[0].innerHTML = `Cost: $${costForThisPizza}`;
    totalCostDisplay.innerHTML = `Order Total: Dancing Baby GIF`;
}

// We need a way to delete pizzas!