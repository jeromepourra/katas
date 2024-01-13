import { LeapYears } from "./LeapYears";

test("[LeapYears] 0 pour true", () => {
    expect(new LeapYears().of(0)).toBe(true);
});

test("[LeapYears] 1 pour false", () => {
    expect(new LeapYears().of(1)).toBe(false);
});

test("[LeapYears] 4 pour true", () => {
    expect(new LeapYears().of(4)).toBe(true);
});

test("[LeapYears] 16 pour true", () => {
    expect(new LeapYears().of(16)).toBe(true);
});

test("[LeapYears] 100 pour false", () => {
    expect(new LeapYears().of(100)).toBe(false);
});

test("[LeapYears] 200 pour false", () => {
    expect(new LeapYears().of(200)).toBe(false);
});

test("[LeapYears] 400 pour true", () => {
    expect(new LeapYears().of(400)).toBe(true);
});

test("[LeapYears] 800 pour true", () => {
    expect(new LeapYears().of(800)).toBe(true);
});

test("[LeapYears] 1600 pour true", () => {
    expect(new LeapYears().of(1600)).toBe(true);
});

test("[LeapYears] 4000 pour false", () => {
    expect(new LeapYears().of(4000)).toBe(false);
});