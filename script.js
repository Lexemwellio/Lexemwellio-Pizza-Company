let howManyPizzas = 1;
let totalCost = 0;

const prices = {
    type: { 'Cheese': 8, 'Pepperoni': 9, 'Sausage': 10, 'Hawaiian': 11 },
    size: { 'Wee': 0, 'Mid': 1, 'Big': 2, 'X-big': 3 },
    crust: { 'Regular': 0, 'Pretzel': 1, 'Deep Dish': 2, 'Garlic': 1, 'Cheesy': 2, 'Gluten-Free': 0 },
    quantity: { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
};

const specialSurprise = () => {
    document.getElementById("special-surprise").style.display = "block"
}

const addPizza = () => {
    const ol = document.getElementById('order-list');
    ol.innerHTML += `<li class="pizza-li" data-which-pizza="0">
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
                                        <option data-display="Wee" value="wee">Wee +$0</option>
                                        <option>Mid +$3</option>
                                        <option>Big +$4</option>
                                        <option>X-big +$5</option>
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
                            <p class="cost-display">Cost: </p>
                        </div>
                        <div class="delete">
                            <button type="button" class="add-to-cart" data-which-button="0" onclick="calculatePizzaCost(this)">
                                <img class="delete-photo" src="images/profile.jpg">
                            </button>
                        </div>
                    </div>
                </li>`;
    howManyPizzas += 1;
    document.getElementsByClassName('pizza-li')[howManyPizzas - 1].setAttribute("data-which-pizza", howManyPizzas);
    document.getElementsByClassName('add-to-cart')[howManyPizzas - 1].setAttribute("data-which-button", howManyPizzas);
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


const calculatePizzaCost = (button) => {
    const whichButton = parseInt(button.getAttribute("data-which-button"), 10);
    const whichPizza = document.getElementsByClassName("pizza-li")[whichButton - 1];
    const options = whichPizza.querySelectorAll(".option-select");
    const costDisplay = whichPizza.querySelector(".cost-display");

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
    costDisplay.innerHTML = `Cost: $${costForThisPizza}`;
    document.getElementById('order-total').innerHTML = `Order Total: $${totalCost}`;
}

// TODO:
// Delete button
// Change calculatePizzaCost to be called when a selector is changed(?)
// add-to-cart would only add the total cost to the total.
// sadly, change the pictures