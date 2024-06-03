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

front.func.checkValid = function () {
  Static.form.question.valid
    ? (Static.form.isValid = true)
    : (Static.form.isValid = false);
};

front.func.sendQuestion = function () {
  let data: object = {
    title: Static.form.question.value,
    text: Static.form.comment.value,
    languageCode: Static.languageCode,
    media: Static.data.media,
  };
  Fn.log("=87d71d=", data);
  let res = front.Services.functions.sendApi("/api/questions/create", data);
  Func.close();
};

front.loader = async () => {
  Static.langQuestion = "Русский";
  Static.languageCode = "ru";
  Static.data = {};
  Static.data.media = [];

  Static.form = {
    question: {
      value: "",
      valid: false,
      error: false,
      placeholder: front.Variable?.words?.qa?.question,
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
