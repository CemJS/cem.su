import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import success from "@svg/icons/success.svg";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("modal__active");
    front.Variable.$el.body.style.overflow = "hidden";
  }, 100);
};

front.func.close = function () {
  Ref.modal.classList.remove("modal__active");
  setTimeout(() => {
    Fn.clearData();
    front.Variable.$el.body.style.overflow = "auto";
  }, 500);
};

front.func.checkForm = async function () {
  if (
    Static.form.email.valid &&
    Static.form.name.valid &&
    Static.form.comment.valid
  ) {
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
        telegram: Static.form.telegram.value,
      },
    };
    let res = await front.Services.functions.sendApi(
      "api/tg/crypto-emergency",
      data,
    );
    if (!res.error) {
      Fn.initOne("alert", {
        icon: success,
        title: front.Variable?.words?.thanks,
        text: front.Variable?.words?.notices?.contactManager,
      });
      Func.close();
    } else {
      Fn.initOne("alert", {
        icon: success,
        title: front.Variable?.words?.notices?.retry,
        text: front.Variable?.words?.notices?.requestError,
        type: "danger",
      });
    }
  } else {
    !Static.form.name.valid ? (Static.form.name.error = "Введите имя") : null;
    !Static.form.email.valid
      ? (Static.form.email.error = "Введите email")
      : null;
    !Static.form.comment.valid
      ? (Static.form.comment.error = "Введите сообщение")
      : null;
  }

  return;
};

front.loader = () => {
  Static.form = {
    email: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Email*",
      view: false,
      disable: false,
    },
    telegram: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Telegram",
      view: false,
      disable: false,
    },
    comment: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Введите ваше сообщение*",
      view: false,
      disable: false,
    },
    name: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Имя*",
      view: false,
      disable: false,
    },
    isValid: false,
  };

  // front.Variable.Auth = true;
  if (front.Variable.Auth) {
    Static.form.name.value = front.Variable.myInfo.fullname;
    Static.form.name.valid = true;
    Static.form.email.value = front.Variable.myInfo.email;
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
