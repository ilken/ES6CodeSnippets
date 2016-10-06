import Parent from "./Parent";
import Child from "./Child";

export default class TestInheritance {
  constructor(){
    this.runTests();
  }
  runTests(){
    let father = new Parent("Dad");
    console.log("Parent's Name:", father.nickname);

    let child = new Child("Kid");
    console.log("Child's Name:", child.nickname);
  }
}
