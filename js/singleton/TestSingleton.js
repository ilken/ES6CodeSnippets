import Singleton from "./Singleton";

export default class TestSingleton {
  constructor(){
    this.runTests();
  }
  runTests(){
    //Test 1
    console.log("Singleton Instance:", Singleton.getInstance() ); // Returns the instance

    //Test 2
    try{
      Singleton.doSomething();
    }
    catch(err){
      console.log("Error: not a static function");
    }

    //Test 3
    Singleton.getInstance().doSomething(); // Logs: I am singleton!
  }
}
