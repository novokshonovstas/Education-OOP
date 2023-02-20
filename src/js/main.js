import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Diference from "./modules/diference";
import Form from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {
    //slider
  const slider = new MainSlider({btns: '.next', container: '.page'});
  slider.render();
//player
new VideoPlayer('.showup .play', '.overlay').init();
new VideoPlayer('.module__video-item .play', '.overlay').init();

// first main page mini slider
const showUpSlider = new MiniSlider({
  container: '.showup__content-slider',
  prev: '.showup__prev',
  next: '.showup__next',
  activeClass: 'card-active',
  animate: true,
});
showUpSlider.init();

// third main page mini slider
const  moduleSlider = new MiniSlider({
  container: '.modules__content-slider',
  prev: '.modules__info-btns .slick-prev',
  next: '.modules__info-btns .slick-next',
  activeClass: 'card-active',
  animate: true,
  // autoPlay: true,
});
moduleSlider.init();

// fifth main page mini slider
const feedSlider = new MiniSlider({
  container: '.feed__slider',
  prev: '.feed__slider .slick-prev',
  next: '.feed__slider .slick-next',
  activeClass: 'feed__item-active',
});
feedSlider.init();


//Diference
 new Diference('.officerold', '.officernew', '.officer__card-item').init();

 // Form

 new Form('.form').init();


 // second page  module slider

 const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
 modulePageSlider.render();

});
