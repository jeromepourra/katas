export class FizzBuzz {

    private readonly FIZZ_VALUE = 3;
    private readonly BUZZ_VALUE = 5;

    private readonly FIZZ_WORD = "Fizz";
    private readonly BUZZ_WORD = "Buzz";
    private readonly FIZZBUZZ_WORD = this.FIZZ_WORD + this.BUZZ_WORD;

    public of(value: number) {
        if (this.isFizzBuzz(value)) {
            return this.FIZZBUZZ_WORD;
        } else if (this.isFizz(value)) {
            return this.FIZZ_WORD;
        } else if (this.isBuzz(value)) {
            return this.BUZZ_WORD;
        } else {
            return value.toString();
        }
    }

    private isFizzBuzz(value: number) {
        return this.isFizz(value) && this.isBuzz(value);
    }

    private isFizz(value: number) {
        return value % this.FIZZ_VALUE === 0;
    }

    private isBuzz(value: number) {
        return value % this.BUZZ_VALUE === 0;
    }

}