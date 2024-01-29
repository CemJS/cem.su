import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";
import success from "@svg/icons/success.svg";

front.listener.finish = () => {
  return;
};

front.func.checkName = () => {
  if (Static.form.name.value.length > 1) {
    Static.form.name.valid = true;
    Static.form.name.err = false;
  } else {
    Static.form.name.valid = false;
    Static.form.name.err = "Введите никнейм";
  }
  return;
};

front.func.checkEmail = () => {
  let regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  if (regex.test(Static.form.email.value)) {
    Static.form.email.valid = true;
    Static.form.email.err = false;
  } else {
    Static.form.email.valid = false;
    Static.form.email.err = "Неверный email";
  }
  return;
};

front.func.checkMessage = () => {
  if (Static.form.message.value.length > 1) {
    Static.form.message.valid = true;
    Static.form.message.err = false;
  } else {
    Static.form.message.valid = false;
    Static.form.message.err = "Введите сообщение";
  }
  return;
};

front.func.checkForm = () => {
  Static.form.name.valid && Static.form.email.valid && Static.form.message.valid ? (Static.form.isValid = true) : (Static.form.isValid = false);
  return;
};

front.func.sendForm = async () => {
  console.log("=ebd78c=", Static.form);
  Fn.initOne("alert", {
    icon: success,
    title: "Спасибо!",
    text: "Скоро с Вами свяжется наш менеджер!",
  });
  if (Static.form.isValid) {
    let data: Object = {
      action: "contactForm",
      formName: "contacts",
      contactForm: {
        fullName: Static.form.name.value,
        email: Static.form.email.value,
        comment: Static.form.message.value,
      },
    };
    Fn.initOne("alert", {
      icon: success,
      title: "Спасибо!",
      text: "Скоро с Вами свяжется наш менеджер!",
    });
    let res = await front.Services.functions.sendApi("api/tg/crypto-emergency", data);
    Fn.log("=08599b=", res);
  }

  return;
};

front.loader = () => {
  Static.form = {
    name: {
      value: "",
      valid: false,
      err: false,
    },
    email: {
      value: "",
      valid: false,
      err: false,
    },
    message: {
      value: "",
      valid: false,
      err: false,
    },
    isValid: false,
  };
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
