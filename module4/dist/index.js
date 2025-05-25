"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//1
function formatString(input, toUpper) {
    return toUpper === true ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("ratul", true));
//2
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
console.log(formatString("ratul", true));
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
//3
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
// 4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
// 5
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue("hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((maxProduct, current) => current.price > maxProduct.price ? current : maxProduct);
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const result = getMostExpensiveProduct(products);
console.log(result);
//7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
//8
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
        });
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
