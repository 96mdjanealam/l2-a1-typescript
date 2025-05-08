function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    const lowInput = input.toLowerCase();
    console.log(lowInput);
    return lowInput;
  } else {
    const capInput = input.toUpperCase();
    console.log(capInput);
    return capInput;
  }
}

// formatString("Hello");
// formatString("Hello", true);
// formatString("Hello", false);

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
  console.log(filteredItems);
  return filteredItems;
}

// filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const arr of arrays) {
    for (const item of arr) {
      result.push(item);
    }
  }
  console.log(result);
  return result;
}

// concatenateArrays(["a"], ["a", "b"]);
// concatenateArrays([1, 2], [3, 4], [5]);

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

// myCar.getInfo();
// myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    const length = value.length;
    console.log(length);
    return length;
  } else if (typeof value === "number") {
    const double = value * 2;
    console.log(double);
    return double;
  } else {
    throw new Error("Invalid type");
  }
}

// processValue("Bangladesh");
// processValue(22);

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    console.log(null);
    return null;
  }

  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  console.log(mostExpensive);
  return mostExpensive;
}

const products: Product[] = [
  { name: "monitor", price: 10 },
  { name: "CPU", price: 25 },
  { name: "Laptop", price: 50 },
];

// getMostExpensiveProduct(products);

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
  console.log(dayType);
  return dayType;
}

// getDayType(Day.Friday);
// getDayType(Day.Wednesday);

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
// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);