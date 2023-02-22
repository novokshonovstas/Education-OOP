export default class ShowInfo {
  constructor(triggers) {
    this.btn = document.querySelectorAll(triggers);
    this.btnPlus = document.querySelectorAll(".plus__green");
    this.btnMinus = document.querySelectorAll(".minus__red");
    this.infoBlock = document.querySelectorAll(".module__info-book");
  }

  hideTriggers() {
    this.btnPlus.forEach((item) => {
      item.style.display = "none";
    });

    this.btnMinus.forEach((item) => {
      item.style.display = "block";
    });

    this.infoBlock.forEach((item) => {
      item.classList.add("animated", "fadeInDown");
    });
  }

  showTriggers() {
    this.btnPlus.forEach((item) => {
      item.style.display = "block";
    });
    this.btnMinus.forEach((item) => {
      item.style.display = "none";
    });

    this.infoBlock.forEach((item) => {
      item.classList.remove("animated", "fadeInDown");
  
    });
  }

  init() {

    try {
      this.btnMinus.forEach((item) => {
        item.style.display = "none";
      });
  
      this.btn.forEach((btn) => {
        btn.addEventListener("click", () => {
          const sibling = btn.closest(".module__info-show").nextElementSibling;
          sibling.classList.add("animated", "fadeInDown");
          
  
          sibling.classList.toggle("msg");
          sibling.style.marginTop = "20px";
  
          if(!sibling.matches(".msg")) {
            this.hideTriggers();
  
            btn.style.background = "#e83434";
          } else {
            this.showTriggers();
            btn.style.background = "";
            sibling.classList.remove("animated", "fadeInDown");
          }
        });
      });
    } catch (error) {
      
    }
   
  }
}
