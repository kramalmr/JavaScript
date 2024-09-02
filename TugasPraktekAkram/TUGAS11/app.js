// greeter. js

import { greet } from "./greeter.js";

console.log(greet("Alice"))
console.log(greet("Bob"))

// userutils. js

import getUser, { userRole, getUserRole } from "./userUtils.js";

console.log(getUser("Akram"));
console.log(userRole);
console.log(getUserRole());