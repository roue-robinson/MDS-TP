// utils classes

// class defining an observable object, including most observers related attributes
class Observable {

  //observers : list[observer]
  //state : boolean

  constructor() {
    this.observers = [];
    this.state = false;
    }
  
  addObserver(observer) {
    this.observers.push(observer);
    return true;
    }

  removeObserver(observer){
    this.observers.remove(observer);
  }

  clearObservers(){
    this.observer = [];
    this.state = false;
  }

  notifyObservers() {
    if (this.state) {
      this.state = false;
      this.observers.forEach(o => o.update(this))
      }
    }

  setChanged(){
    this.state = true;
  }
  
}

//interface d'un observer (abstraite)
class Observer {
  constructor() {
  }

  //called when observable changes
  update(observable, object){ 
  };
}