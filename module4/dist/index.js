"use strict";
class FirstAssignmentTask {
    constructor(case1String, case1Boolean) {
        this.case1String = case1String;
        this.case1Boolean = case1Boolean;
    }
    textHelper() {
        return typeof this.case1Boolean !== "boolean"
            ? this.case1String
            : this.case1Boolean
                ? this.case1String.toUpperCase()
                : this.case1String.toLowerCase();
    }
}
const taskOne = new FirstAssignmentTask('Hellow', true);
console.log(taskOne.textHelper());
