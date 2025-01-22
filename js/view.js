
class View {
  
  constructor(){

    this.div = document.createElement('div');
    this.div.setAttribute('class', 'bottom');

    this.disableButton = document.createElement('button');
    this.disableButton.textContent = 'disable';
    this.disableButton.id = 'disable';
    this.div.appendChild(this.disableButton);

    this.minusButton = document.createElement('button');
    this.minusButton.textContent = '-';
    this.disableButton.id = 'minus';
    this.div.appendChild(this.minusButton);

    this.plusButton = document.createElement('button');
    this.plusButton.textContent = '+';
    this.disableButton.id = 'plus';
    this.div.appendChild(this.plusButton);

    this.numberDisplay = document.createElement('input');
    this.numberDisplay.type = 'text';
    this.numberDisplay.id = 'number';
    this.numberDisplay.value = 5;
    this.div.appendChild(this.numberDisplay);
    
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.className = 'slidecontainer';

    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.min = '0';
    this.slider.max = '10';
    this.slider.value = '5';
    this.slider.className = 'slider';
    this.slider.id = 'myRange';

    this.sliderContainer.appendChild(this.slider);
    this.div.appendChild(this.sliderContainer);
    

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }

  
}
