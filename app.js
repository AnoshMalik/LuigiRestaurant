var burgerCountVar, pizzaCountVar, wingsCountVar, milkshakeCountVar, chipsCountVar, orderSummaryArray, orderFoodVar, makeBookingVar, menuArray;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


burgerCountVar = 0;
pizzaCountVar = 0;
chipsCountVar = 0;
wingsCountVar = 0;
milkshakeCountVar = 0;
orderFoodVar = 0;
makeBookingVar = 0;
menuArray = ['Burger', 'Pizza', 'Chips', 'Wings', 'Milkshake'];
orderSummaryArray = [];


document.getElementById('select').addEventListener('click', (event) => {
  let element_orderType = document.getElementById('orderType');
  orderFoodVar = 0;
  if (0 == 0) {
  }
  let element_option = document.getElementById('option');
  element_option.innerText = 'food it is!';

});

document.getElementById('burgerPlus').addEventListener('click', (event) => {
  burgerCountVar = (typeof burgerCountVar === 'number' ? burgerCountVar : 0) + 1;
  let element_burgerCount = document.getElementById('burgerCount');
  element_burgerCount.innerText = burgerCountVar;

});

document.getElementById('burgerMinus').addEventListener('click', (event) => {
  burgerCountVar = (typeof burgerCountVar === 'number' ? burgerCountVar : 0) + -1;
  if (burgerCountVar < 0) {
    burgerCountVar = 0;
  }
  let element_burgerCount2 = document.getElementById('burgerCount');
  element_burgerCount2.innerText = burgerCountVar;

});

document.getElementById('pizzaPlus').addEventListener('click', (event) => {
  pizzaCountVar = (typeof pizzaCountVar === 'number' ? pizzaCountVar : 0) + 1;
  let element_pizzaCount = document.getElementById('pizzaCount');
  element_pizzaCount.innerText = pizzaCountVar;

});

document.getElementById('pizzaMinus').addEventListener('click', (event) => {
  pizzaCountVar = (typeof pizzaCountVar === 'number' ? pizzaCountVar : 0) + -1;
  if (pizzaCountVar < 0) {
    pizzaCountVar = 0;
  }
  let element_pizzaCount2 = document.getElementById('pizzaCount');
  element_pizzaCount2.innerText = pizzaCountVar;

});

document.getElementById('chipsPlus').addEventListener('click', (event) => {
  chipsCountVar = (typeof chipsCountVar === 'number' ? chipsCountVar : 0) + 1;
  let element_chipsCount = document.getElementById('chipsCount');
  element_chipsCount.innerText = chipsCountVar;

});

document.getElementById('chipsMinus').addEventListener('click', (event) => {
  chipsCountVar = (typeof chipsCountVar === 'number' ? chipsCountVar : 0) + -1;
  if (chipsCountVar < 0) {
    chipsCountVar = 0;
  }
  let element_chipsCount2 = document.getElementById('chipsCount');
  element_chipsCount2.innerText = chipsCountVar;

});

document.getElementById('wingsPlus').addEventListener('click', (event) => {
  wingsCountVar = (typeof wingsCountVar === 'number' ? wingsCountVar : 0) + 1;
  let element_wingsCount = document.getElementById('wingsCount');
  element_wingsCount.innerText = wingsCountVar;

});

document.getElementById('milkShakeMinus').addEventListener('click', (event) => {
  milkshakeCountVar = (typeof milkshakeCountVar === 'number' ? milkshakeCountVar : 0) + -1;
  if (milkshakeCountVar < 0) {
    milkshakeCountVar = 0;
  }
  let element_milkShakeCount = document.getElementById('milkShakeCount');
  element_milkShakeCount.innerText = milkshakeCountVar;

});

document.getElementById('wingsMinus').addEventListener('click', (event) => {
  wingsCountVar = (typeof wingsCountVar === 'number' ? wingsCountVar : 0) + -1;
  if (wingsCountVar < 0) {
    wingsCountVar = 0;
  }
  let element_wingsCount2 = document.getElementById('wingsCount');
  element_wingsCount2.innerText = wingsCountVar;

});

document.getElementById('milkShakePlus').addEventListener('click', (event) => {
  milkshakeCountVar = (typeof milkshakeCountVar === 'number' ? milkshakeCountVar : 0) + 1;
  let element_milkShakeCount2 = document.getElementById('milkShakeCount');
  element_milkShakeCount2.innerText = milkshakeCountVar;

});

document.getElementById('addToCart').addEventListener('click', (event) => {
  orderSummaryArray = [burgerCountVar, pizzaCountVar, chipsCountVar, wingsCountVar, milkshakeCountVar];
  let element_orderList = document.getElementById('orderList');
  let new_li = document.createElement('li');
  new_li.innerText = burgerCountVar;
  let new_span = document.createElement('span');
  new_span.innerText = ' x Burgers';

  new_li.appendChild(new_span);

  element_orderList.appendChild(new_li);
  let new_li2 = document.createElement('li');
  new_li2.innerText = pizzaCountVar;
  let new_span2 = document.createElement('span');
  new_span2.innerText = ' x Pizzas';

  new_li2.appendChild(new_span2);

  element_orderList.appendChild(new_li2);
  let new_li3 = document.createElement('li');
  new_li3.innerText = chipsCountVar;
  let new_span3 = document.createElement('span');
  new_span3.innerText = ' x Chips';

  new_li3.appendChild(new_span3);

  element_orderList.appendChild(new_li3);
  let new_li4 = document.createElement('li');
  new_li4.innerText = wingsCountVar;
  let new_span4 = document.createElement('span');
  new_span4.innerText = ' x Wings';

  new_li4.appendChild(new_span4);

  element_orderList.appendChild(new_li4);
  let new_li5 = document.createElement('li');
  new_li5.innerText = milkshakeCountVar;
  let new_span5 = document.createElement('span');
  new_span5.innerText = ' x Milkshakes';

  new_li5.appendChild(new_span5);

  element_orderList.appendChild(new_li5);

});

document.getElementById('placeOrder').addEventListener('click', (event) => {
  if (!orderSummaryArray.length) {
    event.target.innerText = 'PLACE ORDER';
  } else {
    event.target.innerText = 'YOUR ORDER IS ON ITS WAY!';
  }

});

document.getElementById('clearCart').addEventListener('click', (event) => {
  orderSummaryArray = [];
  burgerCountVar = 0;
  pizzaCountVar = 0;
  chipsCountVar = 0;
  wingsCountVar = 0;
  milkshakeCountVar = 0;
  let element_burgerCount3 = document.getElementById('burgerCount');
  element_burgerCount3.innerText = burgerCountVar;
  let element_pizzaCount3 = document.getElementById('pizzaCount');
  element_pizzaCount3.innerText = pizzaCountVar;
  let element_chipsCount3 = document.getElementById('chipsCount');
  element_chipsCount3.innerText = chipsCountVar;
  let element_wingsCount3 = document.getElementById('wingsCount');
  element_wingsCount3.innerText = wingsCountVar;
  let element_milkShakeCount3 = document.getElementById('milkShakeCount');
  element_milkShakeCount3.innerText = milkshakeCountVar;
  let element_orderList2 = document.getElementById('orderList');
  element_orderList2.replaceChildren();
  let element_placeOrder = document.getElementById('placeOrder');
  element_placeOrder.innerText = 'PLACE ORDER';

});

document.getElementById('submitReview').addEventListener('click', (event) => {
  let element_commentsList = document.getElementById('commentsList');
  let new_li6 = document.createElement('li');
  new_li6.innerText = getNumberOrString(document.getElementById('textArea').value);

  element_commentsList.appendChild(new_li6);

});