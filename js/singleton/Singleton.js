var instance = null;

export default class Singleton {
	constructor()
	{

	}

	doSomething()
	{
		console.log("I am singleton!");
	}

	static getInstance()
	{
		if (!instance)
		{
			instance = new Singleton();
		}

		return instance;
	}
}
