import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import languages from "@json/languages";

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

front.func.checkForm = function () {
  Static.form.question.valid ? (Static.form.isValid = true) : (Static.form.isValid = false);
};

front.func.sendQuestion = async function () {
  let data: object = {
    action: "create",
    title: Static.form.question.value,
    text: Static.form.comment.value,
    languageCode: Static.languageCode,
  };
  Fn.log("=87d71d=", data);
  let res = await front.Services.functions.sendApi("api/Questions", data);
  console.log("=219b0d=", res);
  Func.close();
};

front.loader = async () => {
  Static.langQuestion = "Русский";
  Static.languageCode = "ru";

  Static.form = {
    question: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Вопрос",
      view: false,
      disable: false,
    },
    comment: {
      value: "",
      valid: false,
      error: false,
      placeholder: "Комментарий к вопросу",
      view: false,
      disable: false,
    },
    isValid: false,
  };

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
