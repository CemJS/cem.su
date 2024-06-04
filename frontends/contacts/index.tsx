import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import success from "@svg/icons/success.svg";

front.listener.finish = () => {
  return;
};

front.func.checkForm = () => {
  Static.form.name.valid && Static.form.email.valid && Static.form.comment.valid
    ? (Static.form.isValid = true)
    : (Static.form.isValid = false);
  return;
};

front.func.clearForm = () => {
  Static.form.name.value = "";
  Static.form.name.valid = false;
  Static.form.name.error = false;
  Static.form.email.value = "";
  Static.form.email.valid = false;
  Static.form.email.error = false;
  Static.form.telegram.value = "";
  Static.form.telegram.valid = false;
  Static.form.telegram.error = false;
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
        telegram: Static.form.telegram.value,
        comment: Static.form.comment.value,
      },
    };
    let res = await front.Services.functions.sendApi(
      "api/tg/crypto-emergency",
      data,
    );
    if (!res.error) {
      Func.clearForm();
      Fn.initOne("alert", {
        icon: success,
        title: front.Variable?.words?.thanks,
        text: front.Variable?.words?.notices?.contactManager,
      });
    } else {
      Fn.initOne("alert", {
        icon: success,
        title: front.Variable?.words?.notices?.retry,
        text: front.Variable?.words?.notices?.requestError,
        type: "danger",
      });
    }
  } else {
    !Static.form.name.valid ? (Static.form.name.error = `${front.Variable?.words?.form?.enterName}`) : null;
    !Static.form.email.valid
      ? (Static.form.email.error = `${front.Variable?.words?.form?.enterEmail}`)
      : null;
    !Static.form.comment.valid
      ? (Static.form.comment.error = `${front.Variable?.words?.form?.enterMessage}`)
      : null;
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
    telegram: {
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

  // front.Variable.Auth = true;
  if (front.Variable.Auth) {
    Static.form.name.value = front.Variable?.myInfo?.nickname;
    Static.form.name.valid = true;
    Static.form.email.value = front.Variable?.myInfo?.email;
    Static.form.email.valid = true;
  }
  return;
};

front.display = () => {
  return <Navigation />;
};

export { front };
