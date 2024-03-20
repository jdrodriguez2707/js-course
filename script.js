function calculateDiscountedPrice(price, discountPercentage) {
  let discount = (price * discountPercentage) / 100;
  let priceWithDiscount = price - discount;

  return priceWithDiscount;
}

let originalPrice = 100;
let discountPercentage = 20;
let finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log(`Original price: $${originalPrice}
Discount: ${discountPercentage}%
Price with discount: $${finalPrice}`);
