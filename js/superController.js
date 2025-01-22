
class UpdateSynchronize extends Observer {

	constructor(controller) {
		super();
		this.controller = controller;
	}

	update(observable, object) {
		this.controller.model.numberSet(observable.number);
		this.controller.model.disabledSet(observable.disabled);
	}
}

class SuperController {

	constructor(model) {
		// creation of the controllers
		this.controller1 = new Controller(model);
		this.controller2 = new Controller(model);

		// update, linking the 2 controllers throught observers
		this.updateSynchronize12 = new UpdateSynchronize(this.controller1);
		this.controller1.model.addObserver(this.updateSynchronize12);
		this.updateSynchronize21 = new UpdateSynchronize(this.controller2);
		this.controller2.model.addObserver(this.updateSynchronize21);

		//  action

	}
}
