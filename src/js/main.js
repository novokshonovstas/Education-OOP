// import Slider from "./modules/slider";
import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
    //slider
  const slider = new Slider(".page", ".next");
  slider.render();
//player
const player = new VideoPlayer('.showup .play', '.overlay');
player.init();
});
