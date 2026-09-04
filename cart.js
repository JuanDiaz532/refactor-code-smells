const VIP_DISCOUNT_RATE = 0.1;

function calculateItemTotal(item) {
  return item.price * item.qty;
}

function applyVipDiscount(subtotal) {
  return subtotal - (subtotal * VIP_DISCOUNT_RATE);
}

function calculateCartTotal(items, customerType, manualDiscount, user) {
  if (!user) {
    throw new Error("A valid user is required to calculate the cart total.");
  }

  let subtotal = items.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  if (customerType === "vip") {
    subtotal = applyVipDiscount(subtotal);
  }

  if (manualDiscount > 0) {
    subtotal -= manualDiscount;
  }

  return Math.max(subtotal, 0);
}

module.exports = calculateCartTotal;
