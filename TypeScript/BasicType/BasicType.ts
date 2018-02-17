// Boolean
let isDone: boolean = false;
//console.log(isDone);

// Number
let decimal: number = 6;
//console.log(decimal);
let hex: number = 0xf00d;
//console.log(hex);
let binary: number = 0b1010;
//console.log(binary);
let octal: number = 0o744;
//console.log(octal);

// String
let color: string = "blue";
color = 'red';
//console.log(color);

// ` ${expression}
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`
//console.log(sentence);

// Array
let list: number[] = [1, 2, 3];
//console.log(list);
let list2: Array<number> = [4, 5, 6];
//console.log(list2);

// Tuple
let x: [string, number];
x = ["hello", 2018];
//console.log(x);
//console.log(x[0].substr(1));
//console.log(x[1].toString(16));

x[3] = "world";
//console.log(x[3].toString());

// Enum
enum Color {Red, Green = 9, Blue};
let c: Color = Color.Green;
//console.log(c);
let colorName: string = Color[9];
//console.log(colorName);

// Any
let notSure: any = 4;
//console.log(notSure);
//console.log(notSure.ifItExists()); // Not okay
//console.log(notSure.toFixed());

let prettySure: Object = 4;
//console.log(prettySure.toFixed()); // Not okay

let list3: any[] = [1, true, "free"];
//console.log(list3);
let list4: Array<any> = [1, true, "free"];
list4[1] = 100;
//console.log(list4);

// Void
function warnUser(): void {
  console.log("This is my warning message");
}
//warnUser();

let unusable: void = undefined;
//console.log(unusable);
unusable = null;
//console.log(unusable);

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never{
  while (true) {
  }
}

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//console.log(strLength);
var strLength2: number = (someValue as string).length;
//console.log(strLength2);
