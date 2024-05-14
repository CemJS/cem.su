import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";
import addMedia from "@svg/profile/addMedia.svg";

const RenderAddPreview = () => {
  return (
    <div
      id="add-preview"
      class="aspect-square border-[2px] border-dashed border-[#c5b8eb]"
    >
      <figure
        class="relative m-0 flex h-full overflow-hidden"
        onclick={Func.changeMediaFile}
      >
        <img
          class="static m-auto h-[auto] min-h-0 w-[25%] min-w-0 border-0 bg-[#1D2029] bg-none bg-contain bg-no-repeat object-cover"
          src={addMedia}
          alt="addMedia"
        />
      </figure>
    </div>
  );
};

const RenderLoader = (index) => {
  return (
    <div
      id="loader"
      class="absolute left-1/2 top-1/2 z-[2] h-[70px] w-[70px] rounded-[50%] [transform:translate(-50%,-50%)]"
    >
      <div id="circle">
        <div
          init={(e) => {
            setTimeout(() => {
              Ref[`full${index}`].style.transform = "rotate(360deg)";
            }, 100);
          }}
          id="full"
          ref={`full${index}`}
          class={[
            "absolute h-full w-full rounded-[50%] [clip:rect(0px,70px,70px,35px)]",
            "[transform:rotate(180deg)] [transition:1s]",
          ]}
        >
          <div class="absolute h-full w-full rounded-[50%] [background:radial-gradient(rgba(0,0,0,0)_57%,#F8F8F8_60%)] [transform:rotate(0deg)] [transition:1s]"></div>
        </div>
        <div
          init={(e) => {
            setTimeout(() => {
              Ref[`half${index}`].style.opacity = "1";
              Ref[`half${index}`].style.transform = "rotate(180deg)";
            }, 1000);
          }}
          id="half"
          ref={`half${index}`}
          class="absolute h-full w-full rounded-[50%] opacity-0 [clip:rect(0px,70px,70px,35px)] [transform:rotate(0deg)] ![transition-delay:0.5s] [transition:transform_1s]"
        >
          <div class="absolute h-full w-full rounded-[50%] [background:radial-gradient(rgba(0,0,0,0)_57%,#F8F8F8_60%)] [transform:rotate(0deg)] [transition:1s]"></div>
        </div>
      </div>
    </div>
  );
};

const RenderStopLoading = (index) => {
  return (
    <div
      id="stop_loading"
      onclick={() => {
        Static.data.media.splice(index, 1);
      }}
      class="absolute left-1/2 top-1/2 z-[2] h-6 w-6 cursor-pointer rounded-[4px] bg-white [transform:translate(-50%,-50%)]"
    ></div>
  );
};

const RenderPreview = () => {};

interface preview {
  mediaName: string;
}

export default function () {
  return (
    <main id="modal_main">
      <div
        id="preview-grid"
        class="grid max-h-[425px] cursor-pointer grid-cols-[repeat(4,minmax(70px,1fr))] gap-[5px] overflow-y-auto"
      >
        <RenderAddPreview />
        {Static.previews?.map((preview, index) => {
          return (
            <div class="relative">
              {preview?.mediaName?.length > 0 ? (
                <div
                  onclick={() => {
                    Static.activePreview = index;
                  }}
                  class={[
                    "relative z-0 aspect-square [border:0.5px_solid_#353C50] [&.active]:p-[2px]",
                    Static.activePreview == index ? "active" : "",
                  ]}
                >
                  <figure class="relative m-0 flex h-full overflow-hidden">
                    <img
                      class="static m-auto h-full w-full border-0 bg-[#1D2029] bg-none bg-contain bg-no-repeat object-cover"
                      src={`/assets/upload/gallery/${preview?.mediaName}`}
                      alt="addMedia"
                    />
                  </figure>
                  <div
                    id="bg"
                    class="absolute left-0 top-0 z-[-1] h-full w-full [background:var(--mainGradient)]"
                  ></div>
                </div>
              ) : (
                <div>
                  <RenderLoader index={index} />
                  <RenderStopLoading index={index} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div class="mt-5 flex gap-4">
        <button
          onclick={() => {
            Static.callback(Static.previews[Static.activePreview]?.mediaName);
            Func.close();
          }}
          disabled={Static.previews?.length <= 0}
          id="pin"
          class="btn w-full"
        >
          Прикрепить
        </button>
        <button onclick={Func.close} id="close" class="btn w-full grayscale">
          Отменить
        </button>
      </div>
    </main>
  );
}
