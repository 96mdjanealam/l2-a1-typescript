function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    const lowInput = input.toLowerCase();

    return lowInput;
  } else {
    const capInput = input.toUpperCase();

    return capInput;
  }
}

type item = {
  title: string;
  rating: number;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function filterByRating(items: item[]): item[] {
  const filteredItems = items.filter((item) => item.rating >= 4);

  return filteredItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }
  return result;
}

class vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2022, "Supra");

function processValue(value: string | number): number {
  if (typeof value === "string") {
    const length = value.length;

    return length;
  } else if (typeof value === "number") {
    const double = value * 2;

    return double;
  } else {
    throw new Error("Invalid type");
  }
}


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
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

const products: Product[] = [
  { name: "monitor", price: 10 },
  { name: "CPU", price: 25 },
  { name: "Laptop", price: 50 },
];

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  let dayType: string = "Weekday";
  if (day === Day.Friday || day === Day.Saturday) {
    dayType = "Weekend";
  }

  return dayType;
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}