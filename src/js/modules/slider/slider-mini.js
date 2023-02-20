import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, autoplay, animate, paused) {
    super(container, next, prev, activeClass, autoplay, animate, paused);
  }

  bindTriggers() {
    // при клике стрелочки next первый слайд добавляется в конец (карусель)
    this.next.addEventListener("click", () => this.nextSlide());

    this.prev.addEventListener("click", () => {
      // проход циклом по слайдам с конца И если последние слайды - это кнопки то не назначать им класс активности
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== "BUTTON") {
          //в переменной active лежить последний слайд
          let active = this.slides[i];
          //последний слайд поместить перед первым - то есть в начало слайдов
          this.container.insertBefore(active, this.slides[0]);
          this.decorizeSlides();
          break;
        }
      }
    });
  }

  nextSlide() {
   // решение бага с кнопкой которая становится активным слайдом и нарушает разметку и интерфейс
   if (this.slides[1].tagName === "BUTTON" &&  this.slides[2].tagName === "BUTTON") { 
    this.container.appendChild(this.slides[0]);
    this.container.appendChild(this.slides[1]);
    this.container.appendChild(this.slides[2]);
    this.decorizeSlides();
  } else if (this.slides[1].tagName === "BUTTON") {
    this.container.appendChild(this.slides[0]);
    this.container.appendChild(this.slides[1]);
    this.decorizeSlides();
  } else {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
  }
  }

  decorizeSlides() {
    // убираем класс активности у всех сладйов
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });

    // класс активности у первого слайда если он не кнопка
    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    /* если свойство animate было передано то находим у первого слайда заголовок и делаем его видимым 
            (opacity 0.4 ==> opacity 1) */
    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  init() {
    try {
      this.container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: flex-start;
    `;

      this.bindTriggers();
      this.decorizeSlides();
      if (this.autoPlay) {
        setInterval(() => {
          this.nextSlide();
        }, 5000);
      }
    } catch (error) {}
  }
}
