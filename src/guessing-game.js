class GuessingGame {
    constructor() {
        this.min = undefined;
        this.max = undefined;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {

        const result = Math.ceil((this.max + this.min) / 2);

        return result;
    }

    lower() {
        this.max = Math.ceil((this.max + this.min) / 2);
    }

    greater() {
        const new_min = Math.ceil((this.max + this.min) / 2);
        this.min = new_min
    }
}

module.exports = GuessingGame;
