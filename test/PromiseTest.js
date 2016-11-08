import ES6Promise from "../js/promise/ES6Promise";
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();

describe("Promise Test", () =>
{
	it("Should resolve a promise!", () =>
	{
		let instance = new ES6Promise();
		return instance.fakePromise().should.eventually.equal("Success: Promise1");
	});

	it("Should resolve another promise!", () =>
	{
		let instance = new ES6Promise();
		return instance.fakePromise2().should.eventually.equal("Success: Promise2");
	});
});
