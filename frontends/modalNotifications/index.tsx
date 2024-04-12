import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  console.log("=0fea46=", 2);
  return;
};

front.func.show = function ($el: HTMLElement) {
  setTimeout(() => {
    Ref.notification.classList.remove("translate-x-full");
    Ref.notification.classList.add("translate-x-0");
    // setTimeout(function () {
    //   Ref.checdiv.classList.add("hidden");
    // }, 1000);
    front.Variable.$el.body.style.overflow = "hidden";
  }, 100);
};

front.func.close = function () {
  Ref.notification.classList.add("translate-x-full");
  Ref.notification.classList.remove("translate-x-0");
  Ref.checdiv.classList.remove("hidden");
  setTimeout(() => {
    Fn.clearData();
    front.Variable.$el.body.style.overflow = "auto";
  }, 500);
};

front.loader = async () => {
  let { result } = await front.Services.functions.sendApi(
    `/api/notifications`,
    {},
  );
  console.log("=aba35f=", result);
  return;
};

front.display = () => {
  return (
    <div
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
