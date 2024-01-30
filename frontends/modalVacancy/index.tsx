import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import success from "@svg/icons/success.svg";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("modal__active");
    // this.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
};

front.func.close = function () {
  Ref.modal.classList.remove("modal__active");
  setTimeout(() => {
    Fn.clearData();
    // this.Variable.$el.body.style.overflow = 'auto';
  }, 500);
};

front.func.checkForm = async function () {
  if (Static.form.email.valid && Static.form.name.valid && Static.form.comment.valid) {
    Static.form.isValid = true;
  } else {
    Static.form.isValid = false;
  }
  return;
};

front.func.clearForm = () => {
  Static.form.name.value = "";
  Static.form.name.valid = false;
  Static.form.name.error = false;
  Static.form.email.value = "";
  Static.form.email.valid = false;
  Static.form.email.error = false;
  Static.form.comment.value = "";
  Static.form.comment.valid = false;
  Static.form.comment.error = false;
  Static.form.isValid = false;
};

front.func.sendForm = async () => {
  if (Static.form.isValid) {
    let data: Object = {
      action: "contactForm",
      formName: `Страница Вакансии, Вакансия: ${Static.title}`,
      contactForm: {
        fullName: Static.form.name.value,
        email: Static.form.email.value,
        comment: Static.form.comment.value,
      },
    };
    let res = await front.Services.functions.sendApi("api/tg/crypto-emergency", data);
    if (!res.error) {
      Fn.initOne("alert", {
        icon: success,
        title: "Спасибо!",
        text: "Скоро с Вами свяжется наш менеджер!",
      });
      Func.close();
    } else {
      Fn.initOne("alert", {
        icon: success,
        title: "Повторите попытку",
        text: "Ошибка запроса!",
        type: "danger",
      });
    }
  } else {
    Static.form.name.error = "Введите имя";
    Static.form.email.error = "Введите email";
    Static.form.comment.error = "Введите сообщение";
  }

  return;
};

front.loader = () => {
  Static.form = {
    email: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Email",
      view: false,
      disable: false,
    },
    comment: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваше сообщение",
      view: false,
      disable: false,
    },
    name: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Имя",
      view: false,
      disable: false,
    },
    isValid: false,
  };

  // front.Variable.auth = true;
  if (front.Variable.auth) {
    Static.form.name.value = "testMyInfoName";
    Static.form.name.valid = true;
    Static.form.email.value = "testMyinfoEmail";
    Static.form.email.valid = true;
  }
  return;
};

front.display = () => {
  return (
    <div
      class="modal"
      ref="modal"
      init={Func.show}
      onclick={(e: any) => {
        if (e.target === Ref.modalBody) {
          Func.close();
        }
      }}
    >
      <Navigation />
    </div>
  );
};

export { front };
