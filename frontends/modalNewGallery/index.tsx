import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import languages from "@json/languages";

front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("active");
    front.Variable.$el.body.style.overflow = "hidden";
  }, 100);
};

front.func.close = function () {
  Ref.modal.classList.remove("active");
  setTimeout(() => {
    Fn.clearData();
    front.Variable.$el.body.style.overflow = "auto";
  }, 500);
};

front.loader = async () => {
  Static.complains = [
    { text: "Оскорбление/ Нецензурная лексика.", value: "abusive" },
    { text: "Подозрительный контент", value: "poison" },
    { text: "Непристойный контент", value: "obscene" },
    { text: "Вредоносная ссылка", value: "malicious" },
  ];

  Static.currentComplains = [];

  return;
};

front.display = () => {
  return (
    <div
      class="fixed left-0 top-0 z-50 h-full w-full scale-[1.2] transform opacity-0 [background:rgba(0,0,0,0.5)] [transition:0.2s_0s_ease-in-out,opacity_0.2s_0s_ease-in-out] [&.active]:!scale-100 [&.active]:!opacity-100"
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
