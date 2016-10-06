import ES6Promise from "./ES6Promise";

export default class TestPromise {
  constructor(){
    this.runTests();
  }
  runTests(){
    let testPromise = new ES6Promise();
    testPromise.createPromise();
    //Fire Promise
    //Wait 3s
    //Log: Success: Promise1
    //Wait 3s
    //Log: Success: Promise2
  }
}
