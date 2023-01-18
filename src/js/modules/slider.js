export default class Slider {
    constructor(page, btns) {
      this.page  = document.querySelector(page);
      this.slides = this.page.children;
      this.btns = document.querySelectorAll(btns);
      this.slideIndex = 1;
    }

    showSlides(n) {
        // если n больше длины слайдов (мы дошли до конца слайдов - перейти в начало)
        if(n > this.slides.length) {
            this.slideIndex = 1;
        } 
    // если n меньше длины слайдов (мы дошли до начала слайдов - перейти в конец)
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        // изначально скрываем блок hanson
        // оборачиваем в try/catch если такого блока нет, а его не будет до 3 страницы, то код не сломается
        try {
        this.hanson.style.opacity = '0';

        /* если мы на третем слайде то через 3с показываем блок hanson, добавляем анимацию, 
        после ухода на другой слайд - убираем*/
        if(n === 3) {
            this.hanson.classList.add('animated');
            setTimeout(() => {
            this.hanson.style.opacity = '1';
            this.hanson.classList.add('slideInUp');

            }, 3000);
        } else {
            this.hanson.classList.remove('slideInUp');

        }

        } catch(e) {}

        //скрываем все слайды
     this.slides.forEach(slide => {
        slide.style.display = 'none';
        }); 
        // показываем первый слайд
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    // функция для переключения слайдов, внутри вызваем функицю инициализации this.showslides и в виде аргумента будет смещать индекс на 1
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
        
    }

    render() {
        // получаем вспылвающее окно, оборачиваем в try/catch потому что блок на 3 странице
        try {
            this.hanson  = document.querySelector('.hanson');

        } catch (e) {}

        /* перебираем все кнопки, при клике на каждую вызываем функцию переключения слайда plusSlides с аргументом 1, 
        то есть слайд смещается на 1 вперед */
        this.btns.forEach(btn => {
          btn.addEventListener("click", () => {
            // аргумент 1 будет смещать индекс слайдов при клике на единицу вперед
            this.plusSlides(1);
           }); 
           /* при переборе всех кнопок получаем родителя у кнопок и у родителя предыдущий элемент (это ссылка), 
           при клике на него отменяем стандарт. поведение и вызываем функцию показа первого слайда */
           btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
            e.preventDefault();
            this.slideIndex = 1;
            this.showSlides(this.slideIndex);
           });
        }); 

        this.showSlides(this.slideIndex);
    }



}