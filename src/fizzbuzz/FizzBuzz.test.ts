import { FizzBuzz } from "./FizzBuzz";

test("[FizzBuzz] 1 pour 1", () => {
    expect(new FizzBuzz().of(1)).toBe("1");
});

test("[FizzBuzz] 2 pour 2", () => {
    expect(new FizzBuzz().of(2)).toBe("2");
});

test("[FizzBuzz] 3 pour Fizz", () => {
    expect(new FizzBuzz().of(3)).toBe("Fizz");
});

test("[FizzBuzz] 9 pour Fizz", () => {
    expect(new FizzBuzz().of(9)).toBe("Fizz");
});

test("[FizzBuzz] 5 pour Buzz", () => {
    expect(new FizzBuzz().of(5)).toBe("Buzz");
});

test("[FizzBuzz] 25 pour Buzz", () => {
    expect(new FizzBuzz().of(25)).toBe("Buzz");
});

test("[FizzBuzz] 15 pour FizzBuzz", () => {
    expect(new FizzBuzz().of(15)).toBe("FizzBuzz");
});