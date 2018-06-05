describe("Person", function () {
	it("has a greeting", function () {
		// arrange
		var person = new Person();
		// act
		var actual = person.greet;
		// assert
		expect(actual).toBe("Hello!");
	});
});

describe("FizzBuzzer", function () {
	describe("Given a number not divisible by 3 and 5", function () {
		[{ input: 1, output: 1 },
		{ input: 4, output: 4 }]
			.forEach(function (element) {
				it("should return the number", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = new Number(element.output);
					expect(actual.valueOf()).toBe(expected.valueOf());
				});

			})

	})

	describe("Given a number divisible by 3", function () {
		[{ input: 6},
		{ input: 9}]
			.forEach(function (element) {
				it("should return Fizz", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = "Fizz";
					expect(actual).toBe(expected);
				});

			})

	});

	describe("Given a number divisible by 5", function () {
		[	{ input: 10},
		{ input: 20}]
			.forEach(function (element) {
				it("should return Buzz", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = "Buzz";
					expect(actual).toBe(expected);
				});

			})

	})

	describe("Given a number divisible by 3 and 5", function () {
		[{ input: 15 },
		{ input: 30},
		{ input: 75}]
			.forEach(function (element) {
				it("should return FizzBuzz", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = "FizzBuzz";
					expect(actual).toBe(expected);
				});

			})

	});

	describe("Given a prime number", function () {
		[{ input: 2 },
		{ input: 11},
		{ input: 7}]
			.forEach(function (element) {
				it("should return Whiz", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = "Whiz";
					expect(actual).toBe(expected);
				});

			})

	});

	describe("Given a prime number divisible by 3", function () {
		[{ input: 3 }]
			.forEach(function (element) {
				it("should return FizzWhiz", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = "FizzWhiz";
					expect(actual).toBe(expected);
				});

			})

	});

	describe("Given a prime number divisible by 5", function () {
		[{ input: 5 }]
			.forEach(function (element) {
				it("should return BuzzWhiz", function () {
					// arrange
					var fizzBuzzer = new FizzBuzzer();
					var input = element.input;
					// act
					var actual = fizzBuzzer.fizzBuzz(input);
					// assert
					var expected = "BuzzWhiz";
					expect(actual).toBe(expected);
				});

			})

	});
});
