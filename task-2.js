'use strict';
function getShippingMessage (country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const order = `Shipping to ${country} will cost ${totalPrice} credits`;
  return order;
}