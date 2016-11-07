import Singleton from "../js/singleton/Singleton";
import
{
	expect
}
from "chai";

describe("Singleton Test", () =>
{
	it("Should return the singleton instance!", () =>
	{
		let instance = Singleton.getInstance();
		expect(instance).to.be.an.instanceof(Singleton);
	});

	it("Should throw an error!", () =>
	{
		expect(Singleton.doSomething()).to.throw(Error);
	});
});
