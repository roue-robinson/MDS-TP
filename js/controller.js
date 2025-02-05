class PrintConsole extends Observer {

	constructor() {
		super();
	}

	update(observable, object) {
		console.log(observable.number);
	}
}

class UpdateView extends Observer {

	constructor(view, mediator) {
		super();
		this.view = view;
		this.mediator = mediator;
	}

	update(observable, object) {
		this.mediator.mediate();
	}
}

class UpdateViewDisabling extends Observer {
	constructor(view, mediator) {
		super();
		this.view = view;
		this.mediator = mediator;
	}

	update(observable, object) {
		this.mediator.mediate();
	}
}

class Controller {

	constructor(modelEntier) {

		// creation of the view for the website
		this.view = new View();
		this.modelEntier = modelEntier;
		this.modelActivation = new ModelActivation(this.view);

		// creation of the mediator
		this.mediator = new Mediator(this.view, this.modelActivation, this.modelEntier);

		// update, creation of the observers objects
		let printConsole = new PrintConsole(this.view);
		this.modelEntier.addObserver(printConsole);
		let updateView = new UpdateView(this.view, this.mediator);
		this.modelEntier.addObserver(updateView);
		let updateViewDisabling = new UpdateViewDisabling(this.view, this.mediator);
		this.modelActivation.addObserver(updateViewDisabling);

		//  action, linking the html events to the observable
		this.view.plusButton.addEventListener('click', () =>
			!this.modelActivation.disabled && this.modelEntier.plus());
		this.view.minusButton.addEventListener('click', () =>
			!this.modelActivation.disabled && this.modelEntier.minus());
		this.view.numberDisplay.addEventListener('change', (event) =>
			!this.modelActivation.disabled && this.modelEntier.numberSet(parseInt(event.target.value)));
		this.view.slider.addEventListener('input', (event) =>
			!this.modelActivation.disabled && this.modelEntier.numberSet(parseInt(event.target.value)));
		this.view.disableButton.addEventListener('click', () => this.modelActivation.disable());

		//right click menu
		this.view.plusMenu.addEventListener('click', () =>
			!this.modelActivation.disabled && this.modelEntier.plus());
		this.view.minusMenu.addEventListener('click', () =>
			!this.modelActivation.disabled && this.modelEntier.minus());
		this.view.lockMenu.addEventListener('click', () => this.modelActivation.disable());

	}
}

class Mediator {

	constructor(view, modelActivation, modelEntier) {
		this.view = view;
		this.modelActivation = modelActivation;
		this.modelEntier = modelEntier;
	}

	mediate() {
		//update les affichage liés à la valeur de l'activation Model
		this.view.plusButton.disabled = this.modelActivation.disabled;
		this.view.plusMenu.setAttribute('disabled', this.modelActivation.disabled);
		this.view.minusButton.disabled = this.modelActivation.disabled;
		this.view.minusMenu.disabled = this.modelActivation.disabled;
		this.view.numberDisplay.disabled = this.modelActivation.disabled;
		this.view.slider.disabled = this.modelActivation.disabled;
		//mise à jour du nombre
		if (this.modelActivation.disabled) {
			this.view.plusMenu.setAttribute('disabled', "");
			this.view.minusMenu.setAttribute('disabled', "");
		}
		else {
			this.view.plusMenu.removeAttribute('disabled');
			this.view.minusMenu.removeAttribute('disabled');
			this.view.plusButton.disabled = (this.modelEntier.number >= 10);
			if (this.modelEntier.number >= 10) {
				this.view.plusMenu.setAttribute('disabled', "");
				this.view.plusButton.setAttribute('disabled', "");
			}
			else {
				this.view.plusMenu.removeAttribute('disabled');
				this.view.plusButton.removeAttribute('disabled');
			}
			this.view.minusButton.disabled = (this.modelEntier.number <= 0);
			if (this.modelEntier.number <= 0) {
				this.view.minusMenu.setAttribute('disabled', "");
				this.view.minusButton.setAttribute('disabled', "");
			}
			else {
				this.view.minusMenu.removeAttribute('disabled');
				this.view.minusButton.removeAttribute('disabled');
			}
		}
		this.view.numberDisplay.value = this.modelEntier.number;
		this.view.slider.value = this.modelEntier.number;
	}


}