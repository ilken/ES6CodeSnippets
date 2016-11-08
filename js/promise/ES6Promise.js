export default class ES6Promise
{
	constructor()
	{

	}
	createPromise()
	{
		this.fakePromise()
			.then((res) =>
			{
				console.log(res);
				return this.fakePromise2();
			})
			.then((res) =>
			{
				console.log(res);
			})
			.catch((err) =>
			{
				console.log(err);
			});
	}

	fakePromise()
	{
		return new Promise((resolve, reject) =>
		{
			setTimeout(() =>
			{
				resolve("Success: Promise1");
			}, 1000);
		});
	}

	fakePromise2()
	{
		return new Promise((resolve, reject) =>
		{
			setTimeout(() =>
			{
				resolve("Success: Promise2");
			}, 1000);
		});
	}
}
