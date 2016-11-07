export default class Parent
{
	constructor(name)
	{
		this.name = name;
	}

	get nickname()
	{
		return "Awesome " + this.name;
	}
}
