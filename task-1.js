'use strict';
function makeTransaction (quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const order = `You ordered ${quantity} droids worth ${totalPrice} credits!`
  return order;
}