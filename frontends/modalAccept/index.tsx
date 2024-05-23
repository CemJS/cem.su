import { Cemjsx, front, Func, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";


front.listener.finish = () => {
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add("opacity-[1]", "scale-[1]");
    front.Variable.$el.body.style.overflow = "auto";
  }, 100);
};

front.func.close = function () {
  Ref.modal.classList.remove("opacity-[1]", "scale-[1]");
  setTimeout(() => {
    Fn.clearData();
    // front.Variable.$el.body.style.overflow = "auto";
  }, 500);
};

front.loader = async () => {
  return;
};

front.display = () => {
  return (
    <div
      class="fixed left-0 top-0 z-[100] h-full w-full scale-[1.2] bg-[rgba(0,_0,_0,_0.5)] opacity-0 [transition:transform_0.2s_0s_ease-in-out,_opacity_0.2s_0s_ease-in-out]"
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
