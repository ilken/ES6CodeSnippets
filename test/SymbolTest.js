import Logger from "../js/symbol/Logger";
import
{
	expect
}
from "chai";

describe("Symbol Test", () =>
{
	it("Should return an object with single log entry!", () =>
	{
		Logger.getInstance().clearAll();
		Logger.getInstance().add(12345678, "Log1");
		Logger.getInstance().add(12345678, "Log2");
		let logs = Logger.getInstance().getAll();
		expect(Object.keys(logs).length).to.equal(1);
	});

	it("Should return an object with double log entries!", () =>
	{
		Logger.getInstance().clearAll();
		Logger.getInstance().addUnique(12345678, "Log1");
		Logger.getInstance().addUnique(12345678, "Log2");
		let logs = Logger.getInstance().getAll();
		expect(Object.getOwnPropertySymbols(logs).length).to.equal(2);
	});
});
