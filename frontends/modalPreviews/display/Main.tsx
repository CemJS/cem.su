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

const RenderPreview = () => {};

export default function () {
  return (
    <main id="modal_main">
      <div
        id="preview-grid"
        class="grid cursor-pointer grid-cols-[repeat(4,minmax(70px,1fr))] gap-[5px]"
      >
        <RenderAddPreview />
        {Static.previews?.map((preview, index) => {
          return (
            <div
              onclick={() => {
                Static.activePreview = index;
              }}
              class="aspect-square border-dashed border-[#c5b8eb] [border:0.5px_solid_#353C50]"
            >
              <figure class="relative m-0 flex h-full overflow-hidden">
                <img
                  class="static m-auto h-full w-full border-0 bg-[#1D2029] bg-none bg-contain bg-no-repeat object-cover"
                  src={`/assets/upload/gallery/${preview?.mediaName}`}
                  alt="addMedia"
                />
              </figure>
            </div>
          );
        })}
      </div>
      <button id="pin" class="btn mt-5 w-full">
        Прикрепить
      </button>
    </main>
  );
}
