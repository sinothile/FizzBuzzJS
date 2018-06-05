function FizzBuzzer() {
    this.fizzBuzz = function (number) {
        let output = "";

        output = output + Fizz(number, output);
        output = output + Buzz(number, output);
        output = output + Whiz(number, output);
        if (!output || number == 1) {
            return number;
        }
        return output;

    }

    let isPrime = function (number) {
        for (let i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    let isDivisable = function (number, diviser) {
        return number % diviser == 0;
    }

    let Fizz = function (number, output) {
        if (isDivisable(number, 3)) {
            return "Fizz";
        }
        return "";
    }

    let Buzz = function (number, output) {
        if (isDivisable(number, 5)) {
            return "Buzz";
        }
        return "";
    }

    let Whiz = function (number, output) {
        if (isPrime(number)) {
            return "Whiz";
        }
        return "";
    }

}
