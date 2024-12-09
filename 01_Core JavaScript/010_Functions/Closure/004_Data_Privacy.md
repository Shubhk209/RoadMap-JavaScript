# Data Privacy using Closure

**JavaScript closure helps in the data privacy of the program.**

**Encapsulating Sensitive Data**

- Closures allow you to restrict direct access to sensitive information like passwords, access tokens, or encryption keys.
- By enclosing these variables and functions that operate on them within a closure, you create a private scope.
- Any code outside the closure cannot directly modify or access the sensitive data.

```js
function createCart() {
  let items = []; // Array to store chosen items
  let discountCode = "SUMMER2023"; // Hidden discount code (replace with actual logic)
  let discountApplied = false; // Flag to track discount usage

  const addItem = function (item) {
    items.push(item);
  };

  const getTotal = function () {
    let total = 0;
    for (const item of items) {
      total += item.price;
    }

    if (discountApplied && discountCode === "SUMMER2023") {
      total *= 0.9; // Apply 10% discount
      discountApplied = true; // Prevent multiple discounts
    }

    return total;
  };

  return {
    addItem,
    getTotal,
  };
}

const myCart = createCart();

// Add some items
myCart.addItem({ name: "Shirt", price: 20 });
myCart.addItem({ name: "Hat", price: 15 });

// Try adding the discount code twice (only applies once)
myCart.getTotal(); // No discount yet
console.log("Total before discount:", myCart.getTotal()); // Output: 35

myCart.getTotal("SUMMER2023"); // Apply discount
console.log("Total after discount:", myCart.getTotal()); // Output: 31.5 (with discount)

// Try adding the discount code again (won't apply again)
myCart.getTotal("SUMMER2023");
console.log("Total after another discount attempt:", myCart.getTotal()); // Output: 31.5 (no additional discount)
```

**Explanation**

1. The createCart function uses a closure.
2. Sensitive data (items and discountCode) are hidden within the closure.
3. Public methods (addItem and getTotal) are exposed:
   - `addItem` allows adding items to the cart.
   - `getTotal` calculates the total price, considering any applied discount.
4. The discount logic is encapsulated within getTotal. It checks the discountApplied flag to prevent applying the discount multiple times.
