1. **Using Guard Clauses**:

   ```javascript
   function processOrder(order) {
     // Check if order is null or undefined
     if (!order) {
       console.log("Order is null or undefined");
       return; // Exit the function early
     }

     // Check if order has no items
     if (!order.items || order.items.length === 0) {
       console.log("Order has no items");
       return; // Exit the function early
     }

     // Check if order has no customer information
     if (!order.customer) {
       console.log("Order has no customer information");
       return; // Exit the function early
     }

     // If all checks pass, process the order
     console.log("Processing order for customer:", order.customer.name);
     // Further processing
   }
   ```

2. **Using `switch` Statement**:

   ```javascript
   function getDiscountedPrice(price, customerType) {
     switch (customerType) {
       case "regular":
         // Apply 10% discount for regular customers
         return price * 0.9;
       case "vip":
         // Apply 20% discount for VIP customers
         return price * 0.8;
       case "student":
         // Apply 15% discount for students
         return price * 0.85;
       default:
         // No discount for other types
         return price;
     }
   }
   ```

3. **Using Object Lookup**:

   ```javascript
   // Define discount rates for different customer types
   const discountRates = {
     regular: 0.9,
     vip: 0.8,
     student: 0.85,
   };

   function getDiscountedPrice(price, customerType) {
     // Get discount rate based on customer type, default to 1 (no discount)
     const discountRate = discountRates[customerType] || 1;
     // Calculate and return the discounted price
     return price * discountRate;
   }
   ```

4. **Using Array Methods**:

   ```javascript
   // Function to get only active users from a list of users
   function getActiveUsers(users) {
     // Use filter method to return users with isActive set to true
     return users.filter((user) => user.isActive);
   }

   // List of users
   const users = [
     { name: "John", isActive: true },
     { name: "Jane", isActive: false },
     { name: "Doe", isActive: true },
   ];

   // Get the active users
   const activeUsers = getActiveUsers(users);
   console.log(activeUsers); // Output: [{ name: 'John', isActive: true }, { name: 'Doe', isActive: true }]
   ```

5. **Early Return in Loops**:

   ```javascript
   // Function to find the first positive number in an array
   function findFirstPositiveNumber(numbers) {
     // Iterate over the array of numbers
     for (let number of numbers) {
       // If a positive number is found, return it immediately
       if (number > 0) {
         return number;
       }
     }
     // If no positive number is found, return null
     return null;
   }

   const numbers = [-10, -5, 0, 3, 7];
   const firstPositive = findFirstPositiveNumber(numbers);
   console.log(firstPositive); // Output: 3
   ```

6. **Using Ternary Operator**:

   ```javascript
   // Define age
   const age = 20;
   // Use ternary operator to check if age is 18 or older
   const canVote = age >= 18 ? "Yes" : "No";
   console.log(canVote); // Output: Yes
   ```
