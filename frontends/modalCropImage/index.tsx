import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import Cropper from "cropperjs";

front.listener.finish = () => {
  if (Static.cropImage) {
    Ref.image.src = URL.createObjectURL(Static.cropImage);

    !Static.cropper ? Func.cropperGo() : null;

    const ratioParts = Static.ratio.split(":").map(Number);
    if (ratioParts.length === 2) {
      Static.aspectRatio = ratioParts[1] / ratioParts[0];
      // Static.cropper.setAspectRatio(Static.aspectRatio);
    }
  }

  return;
};

front.func.cropperGo = function ($el: HTMLElement) {
  if (Static.cropper) {
    Static.cropper.destroy();
  }
  Static.cropper = new Cropper(Ref.image, {
    viewMode: 3,
    dragMode: "move",
    autoCropArea: 1,
    autoCrop: false,
    restore: false,
    modal: false,
    guides: false,
    highlight: true,
    cropBoxMovable: true,
    cropBoxResizable: true,
    // cropBoxDraggble: true,
    toggleDragModeOnDblclick: false,

    crop: function (e) {
      var data = e.detail;
    },
  });
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
  console.log("=c2ee37=", Static.defaultRatio);
  !Static.defaultRatio
    ? (Static.ratio = "16:9")
    : (Static.ratio = Static.defaultRatio);
  return;
};

front.display = () => {
  return (
    <div
      class="fixed left-0 top-0 z-10 h-full w-full scale-[1.2] transform opacity-0 [background:rgba(0,0,0,0.5)] [transition:0.2s_0s_ease-in-out,opacity_0.2s_0s_ease-in-out] [&.active]:!scale-100 [&.active]:!opacity-100"
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
