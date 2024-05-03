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
        <img class="block w-full max-w-full" ref="image" id="image" />
      </div>
      <div id="ration__buttons" class="my-3 flex w-full justify-between">
        {ratioValues.map((ratio, index) => {
          return (
            <button
              onclick={() => {
                Static.ratio = ratio;
                if (Static.ratio == "Auto") {
                  Static.cropper.setAspectRatio(NaN);
                  Static.aspectRatio = "Auto";
                  Func.cropperGo();
                } else {
                  const ratioParts = Static.ratio.split(":").map(Number);
                  if (ratioParts.length === 2) {
                    Static.aspectRatio = ratioParts[1] / ratioParts[0];
                    Func.cropperGo();
                    Static.cropper.setAspectRatio(Static.aspectRatio);
                  }
                }
              }}
              id="ratio"
              class={[
                "relative h-[48px] w-full border border-[#0d6efd] [background:--mainGradient] [&.active_#bg]:opacity-0 [&:hover_#bg]:opacity-0",
                index == 0 ? "rounded-s-[5px]" : null,
                index == ratioValues.length - 1 ? "rounded-e-[5px]" : null,
                Static.ratio == ratio ? "active" : null,
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
            console.log("=b59a84=", Static.cropper.crop());
          }}
          class="btn !w-[48%]"
        >
          Загрузить
        </div>
        <div class="btn btn_reset !w-[48%]" onclick={Func.close}>
          Отменить
        </div>
      </div>
    </main>
  );
}
