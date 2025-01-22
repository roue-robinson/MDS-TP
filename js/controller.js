class PrintConsole extends Observer {

	constructor() {
		super();
	}

	update(observable, object) {
		console.log(observable.number);
	}
}

class UpdateView extends Observer {

	constructor(view) {
		super();
		this.view = view;
	}

	update(observable, object) {
		//update les affichage liés à la valeur entière
		this.view.numberDisplay.value = observable.number;
		this.view.slider.value = observable.number;
		//update les affichage liés à la valeur du disabled
		this.view.plusButton.disabled = (observable.disabled || observable.plusDisabled);
		this.view.minusButton.disabled = (observable.disabled || observable.minusDisabled);
		this.view.numberDisplay.disabled = observable.disabled;
		//console.log(observable.disabled,observable.plusDisabled,observable.minusDisabled)
	}
}

class Controller {

	constructor(model) {

		// creation of the view for the website
		this.view = new View();
		this.model = model;

		// update, creation of the observers objects
		let printConsole = new PrintConsole();
		this.model.addObserver(printConsole);
		let updateView = new UpdateView(this.view);
		this.model.addObserver(updateView);

		//  action, linking the html events to the observable
		this.view.plusButton.addEventListener('click', () => this.model.plus())
		this.view.minusButton.addEventListener('click', () => this.model.minus())
		this.view.numberDisplay.addEventListener('input', (event) => this.model.numberSet(parseInt(event.target.value)))
		this.view.slider.addEventListener('input', (event) => this.model.numberSet(parseInt(event.target.value)))
		this.view.disableButton.addEventListener('click', () => this.model.disable())

	}
}
