import { RomanNumerals } from "./RomanNumerals";

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(0)).toBe("");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(1)).toBe("I");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(2)).toBe("II");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(3)).toBe("III");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(4)).toBe("IV");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(5)).toBe("V");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(6)).toBe("VI");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(7)).toBe("VII");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(9)).toBe("IX");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(10)).toBe("X");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(14)).toBe("XIV");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(19)).toBe("XIX");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(973)).toBe("CMLXXIII");
});

test("RomanNumerals.convert()", () => {
    expect(new RomanNumerals().convert(1444)).toBe("MCDXLIV");
});