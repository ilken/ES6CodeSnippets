import Parent from "../js/inheritance/Parent";
import Child from "../js/inheritance/Child";
import
{
	expect
}
from "chai";

describe("Inheritance Test", () =>
{
	it("Should test the parent class!", () =>
	{
		let father = new Parent("Dad");
		expect(father.nickname).to.be.a('string');
		expect(father.nickname).to.equal('Awesome Dad');
	});

	it("Should test the child class!", () =>
	{
		let child = new Child("Kid");
		expect(child.nickname).to.be.a('string');
		expect(child.nickname).to.equal('Awesome Kid');
	});
});
