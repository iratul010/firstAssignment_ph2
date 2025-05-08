class FirstAssignmentTask {
  constructor() {}

  textHelper(case1String: string, case1Boolean?: boolean): string {
    return typeof case1Boolean !== "boolean"
      ? case1String.toUpperCase()
      : case1Boolean
      ? case1String.toUpperCase()
      : case1String.toLowerCase();
  }

   
}
//1st problem solution---->
const taskOne = new FirstAssignmentTask();
console.log(taskOne.textHelper("Hellow", true));
console.log(taskOne.textHelper("Hellow", false));
console.log(taskOne.textHelper("Hellow")); 
//2nd problem solution---->
