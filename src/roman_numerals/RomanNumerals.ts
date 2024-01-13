export class RomanNumerals {

    private relations: Array<Array<number | string>> = [
        [1,     "I" ],
        [4,     "IV"],
        [5,     "V" ],
        [9,     "IX"],
        [10,    "X" ],
        [40,    "XL"],
        [50,    "L" ],
        [90,    "XC"],
        [100,   "C" ],
        [400,   "CD"],
        [900,   "CM"],
        [1000,  "M" ]
    ]

    public convert(nb: number) {
        let result = "";
        this.relations.reverse();
        this.relations.forEach(relation => {
            
            let arabian: number = this.getRelArabian(relation);
            let roman: string = this.getRelRoman(relation);;

            let count = Math.floor(nb / arabian);
            nb -= count * arabian;
            result += roman.repeat(count);

        });
        
        return result;
    }

    private getRelArabian(relation: (string | number)[]) {
        return relation[0] as number;
    }

    private getRelRoman(relation: (string | number)[]) {
        return relation[1] as string;
    }

}