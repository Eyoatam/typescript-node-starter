test("some dummy test", () => {
	const random = Math.floor(Math.random() * 2);
	if (random <= 2) {
		return;
	} else {
		throw new Error(`${random} is greater than 2`);
	}
});
