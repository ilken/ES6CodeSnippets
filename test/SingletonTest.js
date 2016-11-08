import Singleton from "../js/singleton/Singleton";
import
{
	expect,
	should
}
from "chai";

describe("Singleton Test", () =>
{
	it("Should return the singleton!", () =>
	{
		let instance = Singleton.getInstance();
		expect(instance).to.be.an.instanceof(Singleton);
	});

	it("Should return the same instance!", () =>
	{
		let instance1 = Singleton.getInstance();
		let instance2 = Singleton.getInstance();
		expect(instance1).to.equal(instance2);
	});

	it("Should be an undefined function!", () =>
	{
		expect(Singleton.doSomething).to.be.undefined;
	});

	it("Should be an defined function!", () =>
	{
		expect(Singleton.getInstance().doSomething()).to.equal("I am a singleton :(");
	});

	it("Should throw a constructor error!", () =>
	{
		expect(Singleton).to.throw(Error);
	});
});
