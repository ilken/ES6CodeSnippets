var instance = null;
var SINGLETON_ENFORCER = Symbol();

export default class Singleton {
	constructor(enforcer)
	{
		if(enforcer !== SINGLETON_ENFORCER)
		{
			throw new("Use Singleton.getInstance()!!!");
		}
	}

	doSomething()
	{
		console.log("I am singleton!");
	}

	static getInstance()
	{
		if (!instance)
		{
			instance = new Singleton(SINGLETON_ENFORCER);
		}

		return instance;
	}
}
