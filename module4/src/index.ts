//1
function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("ratul", true));
//2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
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
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
concatenateArrays(["a", "b"], ["c"]);      
concatenateArrays([1, 2], [3, 4], [5]);     


// 4
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
 
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);  
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

 
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());    
console.log(myCar.getModel()); 
// 5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
console.log(processValue("hello"));  
console.log(processValue(10));    
//6

 
interface Product {
  name: string;
  price: number;
}

 
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((maxProduct, current) =>
    current.price > maxProduct.price ? current : maxProduct
  );
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

const result = getMostExpensiveProduct(products);
console.log(result);  
 //7
 enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  switch(day) {
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
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}

 
squareAsync(4).then(console.log);      
squareAsync(-3).catch(console.error);  
