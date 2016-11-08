var instance = null;
var SINGLETON_ENFORCER = Symbol();

export default class Singleton
{
	constructor(enforcer)
	{
		if (enforcer !== SINGLETON_ENFORCER)
		{
			throw new Error("Use Singleton.getInstance()");
		}
	}

	doSomething()
	{
		return "I am a singleton :(";
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
