import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";

const ratioValues = ["16:9", "4:5", "1:1", "Auto"];

export default function () {
  return (
    <main id="modal_main">
      <div
        id="image-counteiner"
        ref="container"
        style={`height:${Static.aspectRatio != "Auto" ? `calc(${Ref?.container?.offsetWidth + "px"} * ${Static.aspectRatio})` + ";" : "auto"}`}
        class="w-full overflow-hidden"
      >
        <img class="block max-w-full" ref="image" id="image" />
      </div>
      <div id="ration__buttons" class="my-3 flex w-full justify-between">
        {ratioValues.map((ratio, index) => {
          let disabled = Static.defaultRatio && Static.defaultRatio != ratio;

          return (
            <button
              onclick={() => {
                Static.ratio = ratio;
                if (Static.ratio == "Auto") {
                  // Static.cropper.setAspectRatio(NaN);
                  Static.aspectRatio = "Auto";
                  Func.cropperGo();
                } else {
                  const ratioParts = Static.ratio.split(":").map(Number);
                  if (ratioParts.length === 2) {
                    Static.aspectRatio = ratioParts[1] / ratioParts[0];
                    Func.cropperGo();
                    // Static.cropper.setAspectRatio(Static.aspectRatio);
                  }
                }
              }}
              disabled={disabled}
              id="ratio"
              class={[
                "relative h-[48px] w-full cursor-not-allowed border border-[#0d6efd] [background:--mainGradient] [&.active_#bg]:opacity-0 ",
                !disabled
                  ? "!cursor-pointer [&:hover_#bg]:opacity-0"
                  : "grayscale",
                index == 0 && "rounded-s-[5px]",
                index == ratioValues.length - 1 && "rounded-e-[5px]",
                Static.ratio == ratio && "active",
              ]}
            >
              <span class="relative z-[2]">{ratio}</span>
              <div
                id="bg"
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[--backModal] opacity-100 [transition:all_0.3s_ease]"
              ></div>
            </button>
          );
        })}
      </div>
      <div class="flex justify-between">
        <div
          onclick={() => {
            Static.cropper.crop();
            setTimeout(() => {
              Static.cropper.setData({ width: "100%", height: "100%" });
            }, 500);
            Static.cropper.getCroppedCanvas().toBlob((blob: Blob) => {
              const image = new File([blob], "image.png", {
                type: "image/png",
              });

              Static.callback(image, Static.ratio);
              Func.close();
            });
          }}
          class="btn !w-[48%]"
        >
          Загрузить
        </div>
        <div class="btn btn_reset !w-[48%]" onclick={Func.close}>
          {front.Variable?.words?.tools?.cancel}
        </div>
      </div>
    </main>
  );
}
