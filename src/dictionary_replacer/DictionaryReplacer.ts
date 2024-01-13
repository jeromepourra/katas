type TypeDictionary = { [key: string]: string };

export class DictionaryReplacer {

    private readonly SANDWICH_CHAR = "$";
    private readonly SANDWICH_REGEX_CHAR = "\\$";

    public get(clause: string = "", ...dictionary: TypeDictionary[]) {

        if (clause == "") {
            return "";
        } else {
            let result = clause;
            let matches = this.getReplaceGroups(clause);
            matches.forEach(match => {
                let key = this.unsandwich(match);
                let replace = this.getKeyValue(key, ...dictionary);
                if (replace !== null) {
                    result = this.replace(result, match, replace);
                }
            });
            return result;
        }

    }

    private getReplaceGroups(clause: string) {
        let regexp = new RegExp("(" + this.SANDWICH_REGEX_CHAR + "[A-z0-9]+" + this.SANDWICH_REGEX_CHAR + ")", "g");
        let matches = clause.match(regexp);
        return matches;
    }

    private unsandwich(sandwich: string) {
        return sandwich.slice(1, -1);
    }

    private getKeyValue(key: string, ...dictionary: TypeDictionary[]) {
        for (let i = 0; i < dictionary.length; i++) {
            if (key in dictionary[i]) {
                return dictionary[i][key];
            }
        }
        return null;
    }

    private replace(clause: string, search: string, replace: string) {
        return clause.replace(search, replace);
    }

    /*
    ****************************************************************
    ** Méthodes public qui call des méthodes internes pour les tests
    ****************************************************************
    */

    public pubGetReplaceGroups(clause: string) {
        return this.getReplaceGroups(clause);
    }

    public pubUnsandwich(sandwich: string) {
        return this.unsandwich(sandwich);
    }

    public pubGetKeyValue(key: string, ...dictionary: TypeDictionary[]) {
        return this.getKeyValue(key, ...dictionary);
    }

}