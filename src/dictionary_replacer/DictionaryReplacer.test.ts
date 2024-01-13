import { DictionaryReplacer } from "./DictionaryReplacer";

test("DictionaryReplacer.get()", () => {
    expect(new DictionaryReplacer().get()).toBe("");
});

test("DictionaryReplacer.get()", () => {
    expect(new DictionaryReplacer().get("")).toBe("");
});

test("DictionaryReplacer.pubGetReplaceGroups()", () => {
    expect(new DictionaryReplacer().pubGetReplaceGroups("$sandwich$")).toEqual(["$sandwich$"]);
});

test("DictionaryReplacer.pubGetReplaceGroups()", () => {
    expect(new DictionaryReplacer().pubGetReplaceGroups("$sandwich$ une chaine de caractere $variable$")).toStrictEqual(["$sandwich$", "$variable$"]);
});

test("DictionaryReplacer.pubUnsandwich()", () => {
    expect(new DictionaryReplacer().pubUnsandwich("$sandwich$")).toBe("sandwich");
});

test("DictionaryReplacer.pubUnsandwich()", () => {
    expect(new DictionaryReplacer().pubUnsandwich("$jambon$")).toBe("jambon");
});

test("DictionaryReplacer.pubGetKeyValue()", () => {
    expect(new DictionaryReplacer().pubGetKeyValue("test", {test: ""})).toBe("");
});

test("DictionaryReplacer.pubGetKeyValue()", () => {
    expect(new DictionaryReplacer().pubGetKeyValue("test", {test: "Une valeur"})).toBe("Une valeur");
});

test("DictionaryReplacer.pubGetKeyValue()", () => {
    expect(new DictionaryReplacer().pubGetKeyValue("test")).toBe(null);
});

test("DictionaryReplacer.pubGetKeyValue()", () => {
    expect(new DictionaryReplacer().pubGetKeyValue("test", {other: ""})).toBe(null);
});

test("DictionaryReplacer.pubGetKeyValue()", () => {
    expect(new DictionaryReplacer().pubGetKeyValue("test", {other: "", test: "Une valeur"})).toBe("Une valeur");
});

test("DictionaryReplacer.get()", () => {
    expect(new DictionaryReplacer().get("$name$", {name: "Jérôme"})).toBe("Jérôme");
});

test("DictionaryReplacer.get()", () => {
    expect(new DictionaryReplacer().get("Bonjour $name$", {name: "Jérôme"})).toBe("Bonjour Jérôme");
});

test("DictionaryReplacer.get()", () => {
    expect(new DictionaryReplacer().get("Bonjour $name1$ et $name2$", {name1: "Jérôme", name2: "Michel"})).toBe("Bonjour Jérôme et Michel");
});