import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import success from "@svg/icons/success.svg";

front.listener.finish = () => {
  return;
};

front.func.checkForm = () => {
  Static.form.name.valid && Static.form.email.valid && Static.form.comment.valid ? (Static.form.isValid = true) : (Static.form.isValid = false);
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
      formName: "Страница Контакты, Связь с нами.",
      contactForm: {
        fullName: Static.form.name.value,
        email: Static.form.email.value,
        comment: Static.form.comment.value,
      },
    };
    Fn.initOne("alert", {
      icon: success,
      title: "Спасибо!",
      text: "Скоро с Вами свяжется наш менеджер!",
    });
    let res = await front.Services.functions.sendApi("api/tg/crypto-emergency", data);
    console.log("=08599b=", res);
  } else {
    Static.form.name.error = "Введите имя";
    Static.form.email.error = "Введите email";
    Static.form.comment.error = "Введите сообщение";
  }

  return;
};

front.loader = () => {
  Static.form = {
    name: {
      value: "",
      valid: false,
      error: false,
    },
    email: {
      value: "",
      valid: false,
      error: false,
    },
    comment: {
      value: "",
      valid: false,
      error: false,
    },
    isValid: false,
  };
  Static.e;
  return;
};

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
