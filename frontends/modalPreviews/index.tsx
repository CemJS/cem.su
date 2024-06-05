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

front.func.uploadMedia = async (file: any, type: string) => {
  Static.previews?.unshift({ mediaName: "" });

  let res = await front.Services.functions.uploadMedia(file, type, "gallery");

  if ((res.error = "" || res.error == null)) {
    Static.previews[0] ? (Static.previews[0] = { mediaName: res.name }) : 0;
  } else {
    Static.previews?.splice(0, 1);
  }

  return res.name;
};

front.func.changeMediaFile = function () {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async (_this) => {
    let filesArray = [...input?.files];
    const result = filesArray[0];
    const extension = result?.name.split(".");
    if (extension[extension?.length - 1] == "svg") {
      alert("Недопустимый формат!");
    } else {
      const formData = new FormData();
      formData.append("media", result);
      const options = {
        method: "POST",
        body: formData,
      };
      let mediaPush = await fetch("/upload/gallery", options).then((res) =>
        res.json(),
      );

      Fn.initOne("modalCropImage", {
        cropImage: mediaPush?.name,
        callback: async (photo, aspect) => {
          let resImage = await Func.uploadMedia(photo, "image");
          const edit = { mediaName: resImage };
          let answer = await front.Services.functions.sendApi(
            "/api/user/previews/create",
            edit,
          );
          // if (answer?.error === "") {
          //   Static.previews.unshift(answer?.result);
          // }
        },
      });
    }
    Fn.init();
  };
  input.click();
};

front.func.getPreviews = async () => {
  let res = await front.Services.functions.sendApi("/api/user/previews", {});
  Static.previews = res.result ? res.result : [];
};

front.loader = async () => {
  Static.previews = [];
  Static.activePreview = 0;
  Func.getPreviews();

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
