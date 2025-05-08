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
function formatString(input, toUpper) {
    if (toUpper === false) {
        const lowInput = input.toLowerCase();
        return lowInput;
    }
    else {
        const capInput = input.toUpperCase();
        return capInput;
    }
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
function filterByRating(items) {
    const filteredItems = items.filter((item) => item.rating >= 4);
    return filteredItems;
}
function concatenateArrays(...arrays) {
    const result = [];
    for (const arr of arrays) {
        for (const item of arr) {
            result.push(item);
        }
    }
    return result;
}
class vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2022, "Supra");
function processValue(value) {
    if (typeof value === "string") {
        const length = value.length;
        return length;
    }
    else if (typeof value === "number") {
        const double = value * 2;
        return double;
    }
    else {
        throw new Error("Invalid type");
    }
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}
const products = [
    { name: "monitor", price: 10 },
    { name: "CPU", price: 25 },
    { name: "Laptop", price: 50 },
];
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
    let dayType = "Weekday";
    if (day === Day.Friday || day === Day.Saturday) {
        dayType = "Weekend";
    }
    return dayType;
}
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    });
}
