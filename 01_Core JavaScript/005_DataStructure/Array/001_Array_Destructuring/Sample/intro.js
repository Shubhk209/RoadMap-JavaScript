const user = ["hitesh", 3, "admin"];

var name = user[0];
var id = user[1];
var role = user[2];

console.log(id, name, role);

// Array destructring
const [PersonName, Id, Role] = user;

console.log(PersonName, Id, Role);
