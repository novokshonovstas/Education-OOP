export default class Diference {
    constructor(oldDiference, newDiference, items) {
   try {
    this.oldDiference = document.querySelector(oldDiference);
    this.newDiference = document.querySelector(newDiference);
    this.oldItems =  this.oldDiference.querySelectorAll(items);
    this.newItems =  this.newDiference.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
   } catch (error) {}
    }



    
    bindTriggers(container, propsCounter, propsItems) {
        container.querySelector('.plus').addEventListener('click', () => {
            if(propsCounter !== propsItems.length - 2) {
                propsItems[propsCounter].style.display = 'flex';
                propsCounter++;
            } else {
                propsItems[propsCounter].style.display = 'flex';
                propsItems[propsItems.length - 1].remove();
            }

        });
    }


     
    hideItems(items) {
        items.forEach((item, i, arr) => {
            if(i !== arr.length - 1) {
                item.style.display = 'none';
            }
            }); 
        items.forEach((item, i, arr) => {
            if(i !== arr.length - 1) {
                item.style.display = 'none';
            }
            }); 
    }


    init() {
      try {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindTriggers(this.oldDiference, this.oldCounter, this.oldItems);
        this.bindTriggers(this.newDiference, this.newCounter, this.newItems);
      } catch (error) {}
    }


}