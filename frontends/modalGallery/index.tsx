import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  setTimeout(() => {
    Ref.modalWindow.classList.add("activeModal");
    Static.body.classList.add("activeModal");
    Static.body.style.overflow = "hidden";
  }, 100);
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.body = document.querySelector("body");
  return;
};

front.display = () => {
  return (
    <div>
      <header class="modal-header">
        <button
          class="btn btn_dark"
          onclick={Func.close}
        >
          <i class="i i-cancel"></i>
        </button>
      </header>
      <Navigation />
    </div>
  );
};

export { front };
