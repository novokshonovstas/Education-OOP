export default class VideoPLayer {
    constructor(triggers, overlay) {
      this.btns =  document.querySelectorAll(triggers);
      this.overlay =  document.querySelector(overlay);
      this.close =  this.overlay.querySelector('.close');
    }


bindTriggers () {
    // при клике на кнопку play
    this.btns.forEach(btn => {
        btn.addEventListener('click', () => {
            this.overlay.classList.add('animated', 'fadeIn');
            // если на странице уже есть плеер то мы его отображаем, а не создаем новый при клике
            if(document.querySelector('iframe#frame')) {
                    // меняем с модалки display = 'none' на display = 'flex, таким образом отображаем ее
                    this.overlay.style.display = 'flex';
            } else {
                // получаем id видео с youtube который назначен на кнопку в виде аттрибута
                this.path = btn.getAttribute('data-url');
                // вызываем функцию создания плеера в качестве аргумента будет path
                this.createPayer(this.path);
            }
        });
});
}


bindCloseBtn () {
    this.close.addEventListener('click', () => {
        this.overlay.style.display = 'none';
        this.player.stopVideo();
    });
}
// функция создания плеера по шаблону youtube api, принимает url видео
createPayer (url) {
this.player = new YT.Player('frame', {
    height: '100%',
    width: '100%',
    videoId: `${url}`, 
  });

  // выведем в консоль объект плеера youtube api
  console.log(this.player);
    }

init() {
    //создаем тег скрипт
    const tag = document.createElement('script');
    // назначем ему src youtube API
    tag.src = "https://www.youtube.com/iframe_api";
    // находим первый скрипт на странице - главный скрипт
    const firstScriptTag = document.getElementsByTagName('script')[0];
    //  находим родителя скрипта - тег body и вставляем наш скрипт youtube api до основного скрипта
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // вызываем функцию клика на кнопку плей и создания плеера в модальном окне
    this.bindTriggers();
    this.bindCloseBtn();

}

}