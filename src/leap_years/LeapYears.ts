export class LeapYears {

    private readonly MODULO_FOUR = 4;
    private readonly MODULO_HUNDRED = 100;
    private readonly MODULO_FOUR_HUNDRED = 400;
    private readonly MODULO_FOUR_THOUSAND = 4000;

    private readonly RESULT_YEARS_ZERO = true;

    private readonly RESULT_FOUR = true;
    private readonly RESULT_HUNDRED = false;
    private readonly RESULT_FOUR_HUNDRED = true;
    private readonly RESULT_FOUR_THOUSAND = false;

    public of(year: number) {

        if (this.isYearsZero(year)) {
            return this.RESULT_YEARS_ZERO;
        } else if (this.isModuloFourThousand(year)) {
            return this.RESULT_FOUR_THOUSAND;
        } else if (this.isModuloFourHundred(year)) {
            return this.RESULT_FOUR_HUNDRED;
        } else if (this.isModuloHundred(year)) {
            return this.RESULT_HUNDRED;
        } else if (this.isModuloFour(year)) {
            return this.RESULT_FOUR;
        } else {
            return false;
        }
    }

    public isYearsZero(years: number) {
        return years === 0;
    }

    public isModuloFour(year: number) {
        return year % this.MODULO_FOUR === 0;
    }

    public isModuloHundred(year: number) {
        return year % this.MODULO_HUNDRED === 0;
    }

    public isModuloFourHundred(year: number) {
        return year % this.MODULO_FOUR_HUNDRED === 0;
    }

    public isModuloFourThousand(year: number) {
        return year % this.MODULO_FOUR_THOUSAND === 0;
    }

}