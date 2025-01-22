

// implementation class 

class ModelInteger extends Observable {

    //number: int
    //plusDisabled: boolean
    //minusDisabled: boolean
    //disable: boolean

    constructor() {
        super();
        this.number = 5
        this.plusDisabled = false;
        this.minusDisabled = false;
        this.disabled = false;
    }

    plus() {
        this.numberSet(this.number + 1);
    }

    minus() {
        this.numberSet(this.number - 1);
    }

    //function called when trying to change the number
    numberSet(number) {
        if ((number <= 10) && (number >= 0) && (!this.disabled)) {
            if (number == 0) {
                this.minusDisabled = true;
                this.plusDisabled = false;
            }
            else if (number == 10) {
                this.plusDisabled = true;
                this.minusDisabled = false;
            }
            else {
                this.minusDisabled = false;
                this.plusDisabled = false;
            }
            if (this.number != number) {
                this.number = number;
                this.setChanged();
                this.notifyObservers();
            }
        }
    }

    //function called when disabling/enabling the modifications
    disable() {
        this.disabled = !this.disabled;
        this.setChanged();
        this.notifyObservers();
    }

    //function called when trying to update the disabled value
    disabledSet(disabled) {
        if (this.disabled != disabled) {
            this.disabled = disabled;
            this.setChanged();
            this.notifyObservers();
        }
    }
}
