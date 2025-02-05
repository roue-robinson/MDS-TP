import htmlContent from './htmlComponentCount.html';

class viewComponentCount extends ViewComp {
    constructor(parentView) {
        super(parentView);
        this.div.innerHTML = viewComponentCount.html;
        this.div.innerHTML = htmlContent;
        this.buttonPlus = this.div.querySelector(".buttonPlus");
        parentView.appendChild(this.div);
    }
}