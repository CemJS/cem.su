import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all";
import Navigation from "./navigation";
import Cropper from "cropperjs";

front.listener.finish = () => {
  if (Static.cropImage) {
    let rationButtons = document.querySelectorAll("#ratio");
    console.log("=c90bda=", Ref);
    Ref.image.src = URL.createObjectURL(Static.cropImage);

    const cropper = new Cropper(Ref.image, {
      dragMode: "move",
      autoCrop: false,
    });
    // const croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");

    // rationButtons.forEach((button: HTMLElement) => {
    //   let buttonText = button.innerText;

    //   button.addEventListener("click", () => {
    //     if (buttonText == "Auto") {
    //       cropper.setAspectRatio(NaN);
    //     } else {
    //       cropper.setAspectRatio(eval(buttonText.replace(":", "/")));
    //     }
    //   });
    // });
    rationButtons.forEach((button: HTMLElement) => {
      let buttonText = button.innerText;
    
      button.addEventListener("click", () => {
        if (buttonText == "Auto") {
          cropper.setAspectRatio(NaN);
        } else {
          // Split the buttonText by ":" to get the ratio parts
          const ratioParts = buttonText.split(":").map(Number);
          if (ratioParts.length === 2) {
            // Calculate the aspect ratio without using eval()
            const aspectRatio = ratioParts[0] / ratioParts[1];
            cropper.setAspectRatio(aspectRatio);
          }
        }
      });
    });
  }

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
