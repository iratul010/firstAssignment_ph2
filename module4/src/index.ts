interface Item {
  title: string;
  rating: number;
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
];
const taskTwoFilterRating = new FirstAssignmentTask();
const filterRating = taskTwoFilterRating.filterByRating(books);
console.log(filterRating);
