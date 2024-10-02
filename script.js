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
  ol.innerHTML += `<li>
                    <div class="pizza">
                        <div class="pizza-header">
                            <img class="pizza-photo" src="images/profile.jpg" alt="pizza photo">
                            <div class="pizza-paragraph">
                                Yummy Pizza
                            </div>
                        </div>
                        <div class="pizza-main">
                            <ol class="pizza-options">
                                <li class="option">
                                    <select class="option-select">
                                        <option>Cheese</option>
                                        <option> Pepperoni</option>
                                        <option>Sausage</option>
                                        <option> Hawaiian</option>
                                    </select>
                                </li>
                                <li class="option">
                                    <select class="option-select">
                                        <option>Wee</option>
                                        <option> Mid</option>
                                        <option>Big</option>
                                        <option> X-big</option>
                                    </select>
                                </li>
                                <li class="option">
                                    <select class="option-select">
                                        <option>Pretzel</option>
                                        <option> Deep Dish</option>
                                        <option>Garlic</option>
                                        <option> Cheesy</option>
                                        <option> GF</option>
                                    </select>
                                </li>
                                <li class="option">
                                    <select class="option-select">
                                        <option>1</option>
                                        <option> 2 </option>
                                        <option>3</option>
                                        <option> 4</option>
                                        <option> 5</option>
                                    </select>
                                </li>
                            </ol>
                        </div>
                        <div class="pizza-cost">
                            <p>Cost</p>
                        </div>
                        <div class="delete">
                            <button>
                                <img class="delete-photo" src="images/profile.jpg">
                            </button>
                        </div>
                    </div>
                </li>`;
}
