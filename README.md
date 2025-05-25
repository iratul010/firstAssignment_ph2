# firstAssignment_ph2
# FirstAsmnt
⚠️1.What are some Differences between interfaces and types in Typescript?
 
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
 
⚠️2.What is the use of the keyof keyword in Typescript? Provide an example
 
 * What is keyof?
  keyof means to separate all the keys of an object.And value safety for use it. typescript notice keyof value okay or not.

#ℹExample:
type Student = {
  name: string;
  roll: number;
};
 function showKey(key: keyof Student) {
  console.log("Key is:", key);
}
 showKey("name");
showKey("age");--> error notice and show --->Argument of type '"age"' is not assignable to parameter of type 'keyof Student'.
 
⚠️3.Explain the difference between any,unknown, and never  types in TYPESCRIPT
 
 #any
 Ans: Any type of value here no check value , this use for when user not sure which type data get or return. Here, not safe.

 #unknown:
 Ans: Any value , but is type safe. It Use possible dynamic data for value check needs.


 #never
 ans: No value ever. use for when function never return




 
⚠️4. What is the use of enums in Ts? provide an example of a numeric and string enum.
 
  * Enum
 #explain: Firstly we need to know  enum  full form -> enumeration.
 Enum is used when we know that a variable can only take on certain values.
 example:
   enum DayType {
  Weekday,
  Weekend
}
const userType: HumanType = HumanType.Child; ℹ Already use: 7th Problem Solution for


--------------------------------------
Numeric Enum
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

 
-----------------------------------------

 Strin Enum
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}
 
 ---------------------------------

 
⚠️5. what is type interface in Typescript? why is it helpful?
 
 
In TypeScript, both type and interface are used to define complex data types, but they have some differences and are used in slightly different contexts. mainly  we decide which type or structures data need .
 --
 object,class <--- structures for use it
 
⚠️6. How does Typescript help in improving code quality and project maintainability?
/**
   Mainly we need to more secure data no false value get or return. when our data type all okay then my project is best, no error showing, not possible  bug easily face.So we need typescript thats can help our project is best and initially error show if we try to error with.
   */
⚠️7. Provide an example using union and intersection types in TS?
 
ℹUNION--->
type ID = string | number;
interface Person {
  name: string;
  age: number;
}

 ℹIntersection Type
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

 
