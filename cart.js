function calc(items, type, discount, user) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    if (type == "regular") {
      total = total + items[i].price * items[i].qty;
    } else if (type == "vip") {
      total = total + items[i].price * items[i].qty;
      total = total - (items[i].price * items[i].qty * 0.1);
    }
  }
  if (discount > 0) {
    total = total - discount;
  }
  if (user == null || user == undefined) {
    console.log("error no user");
    return 0;
  }
  if (total < 0) {
    total = 0;
  }
  return total;
}

module.exports = calc;
