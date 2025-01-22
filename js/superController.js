
class UpdateSynchronize extends Observer {

  constructor(controler) {
    super();
    this.controler = controler;
  }

  update(observable, object) {
    this.controler.model.numberSet(observable.number);
    this.controler.model.disabledSet(observable.disabled);
  }
}

class SuperController{

  constructor(model){
      this.controller1 = new Controller(model);
      this.controller2 = new Controller(model);

      // update
      this.updateSynchronize12 = new UpdateSynchronize(this.controller1);
      this.controller1.model.addObserver(this.updateSynchronize12);
      this.updateSynchronize21 = new UpdateSynchronize(this.controller2);
      this.controller2.model.addObserver(this.updateSynchronize21);

      //  action

  }
}
