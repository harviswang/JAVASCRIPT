// Boolean
var isDone = false;
//console.log(isDone);
// Number
var decimal = 6;
//console.log(decimal);
var hex = 0xf00d;
//console.log(hex);
var binary = 10;
//console.log(binary);
var octal = 484;
//console.log(octal);
// String
var color = "blue";
color = 'red';
//console.log(color);
// ` ${expression}
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
//console.log(sentence);
// Array
var list = [1, 2, 3];
//console.log(list);
var list2 = [4, 5, 6];
//console.log(list2);
// Tuple
var x;
x = ["hello", 2018];
//console.log(x);
//console.log(x[0].substr(1));
//console.log(x[1].toString(16));
x[3] = "world";
//console.log(x[3].toString());
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 9] = "Green";
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//console.log(c);
var colorName = Color[9];
//console.log(colorName);
// Any
var notSure = 4;
//console.log(notSure);
//console.log(notSure.ifItExists()); // Not okay
//console.log(notSure.toFixed());
var prettySure = 4;
//console.log(prettySure.toFixed()); // Not okay
var list3 = [1, true, "free"];
//console.log(list3);
var list4 = [1, true, "free"];
list4[1] = 100;
//console.log(list4);
// Void
function warnUser() {
    console.log("This is my warning message");
}
//warnUser();
var unusable = undefined;
//console.log(unusable);
unusable = null;
//console.log(unusable);
// Null and Undefined
var u = undefined;
var n = null;
// Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
//console.log(strLength);
var strLength2 = someValue.length;
console.log(strLength2);
