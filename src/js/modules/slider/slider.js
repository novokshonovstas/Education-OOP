// слайдер прототип от которого наследутся все слайды
export default class Slider {
  /*передаем в конструктор объект свойств, если объект не передан по дефолту будет пустой объект и ошибки не будет */
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = "",
    animate = false,
    autoPlay = false,
    paused,
  } = {}) {
    this.container = document.querySelector(container);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoPlay = autoPlay;
 try {this.slides = this.container.children;} catch (error) {}
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.paused = paused;
    this.slideIndex = 1;
  }
}