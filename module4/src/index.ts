interface Item {
  title: string;
  rating: number;
}

interface Arr {
  array: (string | number)[];
}

class FirstAssignmentTask {
  constructor() {}

  textHelper(case1String: string, case1Boolean?: boolean): string {
    return typeof case1Boolean !== "boolean"
      ? case1String.toUpperCase()
      : case1Boolean
      ? case1String.toUpperCase()
      : case1String.toLowerCase();
  }
  filterByRating(items: Item[]): Item[] {
    const result = items.filter((item) => item.rating < 5 && item.rating >= 4);

    return result;
  }

  conCatArray(...arrays: (string[] | number[])[]): (string | number)[] {
    const result = arrays.reduce<(string | number)[]>((acc, cur) => {
      return [...acc, ...cur];
    }, []);

    return result;
  }

  processValu(value: string | number): string {
    const result =
      typeof value === "number" || "string"
        ? typeof value !== "number"
          ? `This value is String && String Length is ${value.length}`
          : `This value is Number && The Number Multiplied by 2, result ---> ${
              value * 2
            }`
        : "Your Value is Not Support ";
    return result;
  }

  getMostExpensiveProdcut(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, curr) => {
      return curr.price > max.price ? curr : max;
    });
  }

  async squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n >= 0) {
          resolve(n * n);
        } else {
          reject(new Error("Negative number is not allowed."));
        }
      }, 1000);
    });
  }
}
//1st problem solution---->
const taskOne = new FirstAssignmentTask();
console.log(taskOne.textHelper("Hellow", true));
console.log(taskOne.textHelper("Hellow", false));
console.log(taskOne.textHelper("Hellow"));
//2nd problem solution---->
const books: Item[] = [
  { title: "Book A", rating: 4.3 },
  { title: "Book A", rating: 3.5 },
  { title: "Book A", rating: 2.5 },
  { title: "Book A", rating: 4.5 },
  { title: "Book A", rating: 5.5 },
];
const taskTwoFilterRating = new FirstAssignmentTask();
const filterRating = taskTwoFilterRating.filterByRating(books);
console.log(filterRating);
//3rd problem solution

const taskThreeConcatenate = new FirstAssignmentTask();
console.log(taskThreeConcatenate.conCatArray([1, 2, 3, 4], [1, 2]));
console.log(
  taskThreeConcatenate.conCatArray(["1", " 2", " 3", " 4"], ["1", "2"])
);
//4thNo problem solution

class Vehicle {
  protected make: string;
  public year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.make}}`);
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
//5th problem solution
const taskFive = new FirstAssignmentTask();
console.log(taskFive.processValu(50));
console.log(taskFive.processValu("Ratul Islam"));

// 6th Problem Solution
interface Product {
  name: string;
  price: number;
}
const taskSix = new FirstAssignmentTask();
const hightPrice = taskSix.getMostExpensiveProdcut([
  { name: "Bag", price: 1200 },
  { name: "Mobile", price: 30000 },
  { name: "NoteBook", price: 20 },
]);
console.log(hightPrice);
// 7th Problem Solution
enum Days {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

function getDayType(day: Days): "Weekday" | "Weekend" {
  if (day === Days.Saturday || day === Days.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

console.log(getDayType(Days.Saturday));
console.log(getDayType(Days.Monday));
// 8th Problem Solution
const taskEight = new FirstAssignmentTask();
taskEight
  .squareAsync(4)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Err", err.message);
  });
taskEight
  .squareAsync(-4)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Err", err.message);
  });

/**😒⚠️ INTERVIEW QUESTIONS -BLOG TASK 💓😊 ,THANKS MY DEAR TEACHERS & PRAY FOR ME!*/

//1️⃣What are some Differences between interfaces and types in Typescript?
/*
 #INTERFACE
 ---explain-- 
 Firstly we need to know what is interface & why use it.when typescript need to make a obj or class then need a structures i mean how looking like it is? we need to decide. So this structures can make it possible by type or interce. In a word, a structure is actually an interface.


 #TYPES---
Typescript is not for object or class it is a way of type make a function,object,class, union,tuple,primitive,function used it 

#difference between them
-----------------------------------------------------------
 TYPES                           |       INTERFACE
-----------------------------------------------------------
1.  typesc can extends           | 1. interface can extends
-----------------------------------------------------------
-----------------------------------------------------------
2.  any type possible            | 1. just for obj/class
-----------------------------------------------------------
-----------------------------------------------------------
3. same name merge not possible  | 3. same name merge possible
  but & possible                 |             
-----------------------------------------------------------
*/

//2️⃣What is the use of the keyof keyword in Typescript? Provide an example
/**
 * What is keyof?
  keyof means to separate all the keys of an object.And value safety for use it. typescript notice keyof value okay or not.

#ℹ️Example:
type Student = {
  name: string;
  roll: number;
};
 function showKey(key: keyof Student) {
  console.log("Key is:", key);
}
 showKey("name");
showKey("age");--> error notice and show --->Argument of type '"age"' is not assignable to parameter of type 'keyof Student'.
 */

//3️⃣Explain the difference between any,unknown, and never  types in TYPESCRIPT

/**
 #any 
 Ans: Any type of value here no check value , this use for when user not sure which type data get or return. Here, not safe.

 #unknown:
 Ans: Any value , but is type safe. It Use possible dynamic data for value check needs.


 #never
 ans: No value ever. use for when function never return 





 * 
 */

//4️⃣ What is the use of enums in Ts? provide an example of a numeric and string enum.
/**
  * Enum
 #explain: Firstly we need to know  enum  full form -> enumeration.
 Enum is used when we know that a variable can only take on certain values.
 example:
   enum DayType {
  Weekday,
  Weekend
}
const userType: HumanType = HumanType.Child; ℹ️ Already use: 7th Problem Solution for


--------------------------------------
Numeric Enum       
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

console.log(Direction.Up);  when console use then output give me index type value 
-----------------------------------------

 Strin Enum
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

console.log(Status.Success); here output give me fully direct value
 ---------------------------------

  */

 //5️⃣ what is type interface in Typescript? why is it helpful?

/**
 
In TypeScript, both type and interface are used to define complex data types, but they have some differences and are used in slightly different contexts. mainly  we decide which type or structures data need .  
 --
 object,class <--- structures for use it 
 */

  //6️⃣ How does Typescript help in improving code quality and project maintainability?

  /**
   Mainly we need to more secure data no false value get or return. when our data type all okay then my project is best, no error showing, not possible  bug easily face.So we need typescript thats can help our project is best and initially error show if we try to error with.
   */
    //7️⃣ Provide an example using union and intersection types in TS?
/*
ℹ️UNION--->
type ID = string | number; 
interface Person {
  name: string;
  age: number;
}

 ℹ️Intersection Type
interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeDetails = Person & Employee;   

let employee: EmployeeDetails = {
  name: "Ratul",
  age: 26,
  employeeId: 323,
  department: "Frontend Developer",
};

console.log(employee);

*/