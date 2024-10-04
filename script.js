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

    // Create a new list item element
    const pizzaItem = document.createElement('li');
    pizzaItem.id = `pizza-${howManyPizzas}`; // Unique ID for each pizza
    pizzaItem.className = "pizza-li";
    pizzaItem.innerHTML = `
        <div class="pizza-div">
            <div class="pizza-header">
                <img class="pizza-photo" src="images/profile.jpg" alt="pizza photo">
            </div>
            <div class="pizza-main">
                <ol class="pizza-options">
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li'))">
                            <option>Cheese</option>
                            <option>Pepperoni</option>
                            <option>Sausage</option>
                            <option>Hawaiian</option>
                        </select>
                    </li>
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li'))">
                            <option value="Wee">Wee +$0</option>
                            <option value="Mid">Mid +$3</option>
                            <option value="Big">Big +$4</option>
                            <option value="X-big">X-big +$5</option>
                        </select>
                    </li>
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li'))">
                            <option>Regular</option>
                            <option>Pretzel</option>
                            <option>Deep Dish</option>
                            <option>Garlic</option>
                            <option>Cheesy</option>
                            <option>Gluten-Free</option>
                        </select>
                    </li>
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li'))">
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
                <p class="cost-display"></p>
            </div>
            <div class="delete">
                <button type="button" class="add-to-cart" onclick="calculatePizzaCost(this.closest('.pizza-li'))">
                    <img class="delete-photo" src="images/profile.jpg">
                </button>
            </div>
        </div>
    `;

    // Append the new pizza item to the order list
    ol.appendChild(pizzaItem);

    // Calculate cost for the new pizza
    calculatePizzaCost(pizzaItem);

    // Increase the pizza count for unique IDs
    howManyPizzas++;
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


const calculatePizzaCost = (whichPizza) => {
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

    //display pizza cost
    const costForThisPizza = (typeCost + sizeCost + crustCost) * quantityValue;
    costDisplay.innerHTML = `$${costForThisPizza}`;

    // calculate total cost
    const pizzaItems = document.querySelectorAll('.pizza-li'); // Select all pizza list items
    let totalCost = 0; // Initialize total cost

    pizzaItems.forEach(pizza => {
        const costDisplay = pizza.querySelector('.cost-display'); // Find the cost display for each pizza
        if (costDisplay) {
            const pizzaCost = parseFloat(costDisplay.innerHTML.replace('$', '')); // Extract the cost as a float
            totalCost += isNaN(pizzaCost) ? 0 : pizzaCost; // Add to total cost, defaulting to 0 if NaN
        }
    });

    // Update the total cost display in the document
    document.getElementById('order-total').innerHTML = `Order Total: $${totalCost.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Call your function here
    calculatePizzaCost(document.getElementById("first-pizza"));
});

// TODO:
// Delete button
// Change calculatePizzaCost to be called when a selector is changed(?)
// add-to-cart would only add the total cost to the total.
// sadly, change the pictures