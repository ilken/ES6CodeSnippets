import Logger from "./Logger";

export default class TestSymbol
{
	constructor()
	{
		this.runTests();
	}
	runTests()
	{
		//Test
		Logger.getInstance().add(12345678, "Log1");
		Logger.getInstance().add(12345678, "Log2");
		console.log(Logger.getInstance().getAll()); //Prints: Object {12345678: "Log2"}

		//Reset
		Logger.getInstance().clearAll();

		//Try again with Symbols
		Logger.getInstance().add(Symbol(12345678), "Log1");
		Logger.getInstance().add(Symbol(12345678), "Log2");
		console.log(Logger.getInstance().getAll()); //Prints: Object {Symbol(12345678): "Log1", Symbol(12345678): "Log2"}
	}
}
