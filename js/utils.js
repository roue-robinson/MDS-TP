// utils classes


class Observable {

  constructor() {
    this.observers = []
    this.state = false
    }
  
  addObserver(observer) {
    this.observers.push(observer)
    return true;
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

  removeObserver(observer){
    this.observers.remove(observer);
  }
  
}

class Observer {
  constructor() {

  }

  //called when observable changes
  update(observable, object){
    
  };
}