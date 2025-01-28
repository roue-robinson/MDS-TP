

// implementation class 

class ModelInteger extends Observable {

    //number: int
    //plusDisabled: boolean
    //minusDisabled: boolean
    //disable: boolean

    constructor() {
        super();
        this.number = 5
    }

    plus() {
        this.numberSet(this.number + 1);
    }

    minus() {
        this.numberSet(this.number - 1);
    }

    //function called when trying to change the number
    numberSet(number) {
        if (0 <= number && number <= 10) {
            this.number = number;
        }
        this.setChanged();
        this.notifyObservers();
    }

}

class ModelActivation extends Observable {

    constructor() {
        super();
        this.disabled = false;
    }

    disable() {
        this.disabled = !this.disabled;
        this.setChanged();
        this.notifyObservers();
    }

}