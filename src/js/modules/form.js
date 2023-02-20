export default class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: "Загрузка...",
      success: "Спасибо! Мы скоро с вами свяжемся!",
      failure: "Что-то пошло не так...",
    };
    this.path = "assets/question.php";
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  }

  clearInputs() {
    this.inputs.forEach(input => {
      input.value = "";
    });
  }

  // валидация поля имали
  checkMailInputs() {
    const mailInputs  = document.querySelectorAll('[type="email"]');
     mailInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
        if(e.key.match(/[^a-z 0-9 @ \.]/ig)) {
            e.preventDefault();
        }
        });
        }); 
  }

  initMask() {
    
  }

  init() {
    this.checkMailInputs();

    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
          e.preventDefault();

          let statusMessage = document.createElement("div");
          statusMessage.style.cssText = `
            margin-top: 15px;
            font-size: 20px;
            color: grey;
        `;
          form.parentNode.appendChild(statusMessage);
          statusMessage.textContent = this.message.loading;

          const formData = new FormData(form);

    this.postData(this.path, formData)
        .then((res) => {
            console.log(res);
            statusMessage.textContent = this.message.success;
            })
        .catch(() => {
            statusMessage.textContent = this.message.failure;
            })  .finally(() => {
                this.clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
              });
        });
       
    });
  }
}
