
class UpdateSynchronize extends Observer {

	constructor(controller) {
		super();
		this.controller = controller;
	}

	update(observable, object) {
		this.controller.modelEntier.numberSet(10-observable.number);
		//this.controller.model.disabledSet(observable.disabled);
	}
}

class SuperController {

	constructor(model1,model2) {
		// creation of the controllers
		this.controller1 = new Controller(model1);
		this.controller2 = new Controller(model2);

		// update, linking the 2 controllers throught observers
		this.updateSynchronize12 = new UpdateSynchronize(this.controller2);
		this.controller1.modelEntier.addObserver(this.updateSynchronize12);
		this.updateSynchronize21 = new UpdateSynchronize(this.controller1);
		this.controller2.modelEntier.addObserver(this.updateSynchronize21);

		//  action
		// -_-
	}
}
