### **2️⃣ Short Answer Questions (2 Questions)**

8. **What are the key differences between `var`, `let`, and `const` in JavaScript?**

Write your answer here.
Be as detailed as possible.
You can provide a code snippet using markdown format.

ANSWER:

VAR: Var is an older way of declaring or initializing variables in javascript. VAR is a functional scope variable keyword. When variables are declared using VAR keyword, they aren't limited to the scope in which they are declared, they are only limited to the function in which they are declared, meaning the variable declared using VAR can be accessed outside of that function scope.
Before ES6, also known as ES2015, VAR was the only way to declare variables.

function printNumbers(){
for(var i = 0; i < 5; i++){
console.log(i) // YOU CAN LOG i INSIDE OF THIS BLOCK WITHOUT ISSUES
}
console.log(i) // YLU CAN ALSO LOG i OUTSIDE OF THE BLOCK BUT INSIDE OF THE FUNCTION WITHOUT ISSUES
}

printNumbers();

GLOBAL VARIABLES:::::
WINDOW OBJECT: Variables created with VAR keyword is attached to the window object.

var car: G-wagon
window.car // G-wagon

LET: Let emmerged after the introduction of es2015/es6. it's a block scoped variable keyword, meaning variables declared with LET keyword are not accessible outside of its block.

function printNumbers(){
for(var i = 0; i < 5; i++){
console.log(i) // YOU CAN LOG i INSIDE OF THIS BLOCK WITHOUT ISSUES
}
console.log(i) // YOU CANNOT LOG i OUTSIDE OF THE BLOCK.
}

printNumbers();

GLOBAL VARIABLES:::::
WINDOW OBJECT: Variables created with LET keyword are not attached to the window object.

var car: G-wagon
window.car // undefined.

CONST KEYWORD: This is also an es6 way of declaring/initializing a variable. CONST simply means CONSTANT, it cannot be changed.
This is useful as a control so that you don't inadvertently make a change to a variable. The difference between CONST and LET simply lies in the re-assigning of values to variables. Values assigned to variables using CONST cannot be re-assigned.

e.g:::

const isRaining = true;
const isRaining = false // This is wrong whenever we make use of the CONST keyword.
