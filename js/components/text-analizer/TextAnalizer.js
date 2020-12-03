class TextAnalizer {
    constructor(text) {
        this.text = text;
        this.abc = {
            en: {
                lowercase: 'qwertyuiopasdfghjklzxcvbnm',
                uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
            },
            lt: {
                lowercase: 'ąčęėįšųūž',
                uppercase: 'ĄČĘĖĮŠŲŪŽ',
            },
        };
        this.lowercaseEnabled = true;
        this.uppercaseEnabled = true;
        this.languages = [];
        this.finalAbc = '';

        this.addLanguage('en');
    }

    addLanguage(newLang) {
        if (this.abc[newLang]) {
            this.languages.push(newLang);

            this.finalAbc = '';
            for (let lang of this.languages) {
                if (this.lowercaseEnabled) {
                    this.finalAbc += this.abc[lang].lowercase;
                }
                if (this.uppercaseEnabled) {
                    this.finalAbc += this.abc[lang].uppercase;
                }
            }
        } else {
            console.error(`ERROR: norima (${newLang}) kalba nerasta.`);
        }
    }

    letterCount() {
        let count = 0;

        for (let letter of this.text) {
            if (this.finalAbc.includes(letter)) {
                count++;
            }
        }

        return count;
    }
}

export { TextAnalizer }