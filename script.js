let howManyPizzas = 1;
let totalCost = 0;

const prices = {
    type: { 'Cheese $8': 8, 'Pepperoni $9': 9, 'Sausage $10': 10, 'Hawaiian $11': 11 },
    size: { 'Wee +$0': 0, 'Mid +$3': 3, 'Big +$4': 4, 'X-big +$5': 5 },
    crust: { 'Regular +$0': 0, 'Pretzel +$1': 1, 'Deep Dish +$2': 2, 'Garlic +$1': 1, 'Cheesy +$2': 2, 'Gluten-Free +$0': 0 },
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
                <img class="pizza-photo" src="https://i3.ytimg.com/vi/MIyY8iAEvZ8/maxresdefault.jpg"
                    alt="cheese pizza photo">
            </div>
            <div class="pizza-main">
                <ol class="pizza-options">
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li')); updatePizzaPhoto(this.closest('.pizza-li'));">
                            <option>Cheese $8</option>
                            <option>Pepperoni $9</option>
                            <option>Sausage $10</option>
                            <option>Hawaiian $11</option>
                        </select>
                    </li>
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li'))">
                            <option display="Wee" value="wee">Wee +$0</option>
                            <option>Mid +$3</option>
                            <option>Big +$4</option>
                            <option>X-big +$5</option>
                        </select>
                    </li>
                    <li class="option">
                        <select class="option-select" onchange="calculatePizzaCost(this.closest('.pizza-li'))">
                            <option>Regular +$0</option>
                            <option>Pretzel +$1</option>
                            <option>Deep Dish +$2</option>
                            <option>Garlic +$1</option>
                            <option>Cheesy +$2</option>
                            <option>Gluten-Free +$0</option>
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
    whichPizza.setAttribute("data-cost", costForThisPizza);
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

const updatePizzaPhoto = (whichPizza) => {
    pizzaTypes = whichPizza.querySelectorAll('.option-select')[0];
    pizzaPhoto = whichPizza.querySelector('.pizza-photo');
    if (pizzaTypes.value === "Cheese $8") {
        pizzaPhoto.setAttribute("src", "https://i3.ytimg.com/vi/MIyY8iAEvZ8/maxresdefault.jpg");
        pizzaPhoto.setAttribute("alt", "cheese pizza photo");
    } else if (pizzaTypes.value === "Pepperoni $9") {
        pizzaPhoto.setAttribute("src", "https://wallpaperaccess.com/full/2237015.jpg");
        pizzaPhoto.setAttribute("alt", "pepperoni pizza photo");
    } else if (pizzaTypes.value === "Sausage $10") {
        pizzaPhoto.setAttribute("src", "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_SkilletSausageCheesePizza-72_ked2vq");
        pizzaPhoto.setAttribute("alt", "sausage pizza photo");
    } else {
        pizzaPhoto.setAttribute("src", "https://th.bing.com/th/id/OIP.8eE-a09fPNQw3JfAYVvutwHaE8?rs=1&pid=ImgDetMain");
        pizzaPhoto.setAttribute("alt", "hawaiian pizza photo");
    }

}

// TODO:
// Delete button
// Change calculatePizzaCost to be called when a selector is changed(?)
// add-to-cart would only add the total cost to the total.
// sadly, change the pictures