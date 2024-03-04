import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

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
  Static.form.name.valid && Static.form.email.valid && Static.form.message.valid
    ? (Static.form.isValid = true)
    : (Static.form.isValid = false);
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
  return <Navigation />;
};

export { front };
