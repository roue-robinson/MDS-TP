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
		this.mediator.mediateView(observable, object);
	}
}

class UpdateViewDisabling extends Observer {
	constructor(view, mediator) {
		super();
		this.view = view;
		this.mediator = mediator;
	}

	update(observable, object) {
		this.mediator.mediateDisable(observable, object);
	}
}

class Controller {

	constructor(modelEntier) {

		// creation of the view for the website
		this.view = new View();
		this.modelEntier = modelEntier;
		this.modelActivation = new ModelActivation(this.view);

		// creation of the mediator
		this.mediator = new Mediator(this.view, this.modelActivation);

		// update, creation of the observers objects
		let printConsole = new PrintConsole(this.view);
		this.modelEntier.addObserver(printConsole);
		let updateView = new UpdateView(this.view, this.mediator);
		this.modelEntier.addObserver(updateView);
		let updateViewDisabling = new UpdateViewDisabling(this.view, this.mediator);
		this.modelActivation.addObserver(updateViewDisabling);

		//  action, linking the html events to the observable
		this.view.plusButton.addEventListener('click', () => this.modelEntier.plus())
		this.view.minusButton.addEventListener('click', () => this.modelEntier.minus())
		this.view.numberDisplay.addEventListener('change', (event) => this.modelEntier.numberSet(parseInt(event.target.value)))
		this.view.slider.addEventListener('input', (event) => this.modelEntier.numberSet(parseInt(event.target.value)))
		this.view.disableButton.addEventListener('click', () => this.modelActivation.disable())

		//right click menu
		let plusMenu = document.getElementById("plusMenu");
		plusMenu.addEventListener('click', () => this.modelEntier.plus())
		let minusMenu = document.getElementById("minusMenu");
		minusMenu.addEventListener('click', () => this.modelEntier.minus())
		let lockMenu = document.getElementById("lockMenu");
		lockMenu.addEventListener('click', () => this.modelActivation.disable())
		console.log(plusMenu, minusMenu, lockMenu);

	}
}

class Mediator{

	constructor(view,modelActivation) {
		this.view = view;
		this.modelActivation = modelActivation
	}

	mediateView(observable, object) {
		if (!this.modelActivation.disabled){
			this.update(observable, object);
		}
		else{
			this.update(observable, object); //pôur garder la vue en live et voir les changements d'un model sur l'autre
		}
	}

	mediateDisable(){
		//update les affichage liés à la valeur de l'activation Model
		this.view.plusButton.disabled = this.modelActivation.disabled;
		this.view.plusMenu.setAttribute('disabled', this.modelActivation.disabled);
		console.log("debug");
		this.view.minusButton.disabled = this.modelActivation.disabled;
		this.view.minusMenu.disabled  = this.modelActivation.disabled;
		this.view.numberDisplay.disabled = this.modelActivation.disabled;
		this.view.slider.disabled = this.modelActivation.disabled;
		if (this.modelActivation.disabled) {
			this.view.plusMenu.setAttribute('disabled', "");
			this.view.minusMenu.setAttribute('disabled', "");
		}
		else {
			this.view.plusMenu.removeAttribute('disabled');
			this.view.minusMenu.removeAttribute('disabled');
		}
	}

	update(observable, object) {
		//update les affichage liés à la valeur du nombre
		this.view.numberDisplay.value = observable.number;
		this.view.slider.value = observable.number;
		if (!this.modelActivation.disabled) {

			this.view.plusButton.disabled = (observable.number >= 10);
			if (observable.number >= 10) {
				this.view.plusMenu.setAttribute('disabled', "");
			}
			else {
				this.view.plusMenu.removeAttribute('disabled');
			}
			
			this.view.minusButton.disabled = (observable.number <= 0);
			if (observable.number <= 0) {
				this.view.minusMenu.setAttribute('disabled', "");
			}
			else {
				this.view.minusMenu.removeAttribute('disabled');
			}
		}
	}


}