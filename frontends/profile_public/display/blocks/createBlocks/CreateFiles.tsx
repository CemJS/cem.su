import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

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
              Ref[`half${index}`].style.transition = "transform 1s";
              Ref[`half${index}`].style.transform = "rotate(180deg)";
            }, 1000);
          }}
          id="half"
          ref={`half${index}`}
          class="absolute h-full w-full rounded-[50%] opacity-0 [clip:rect(0px,70px,70px,35px)] [transform:rotate(0deg)] ![transition-delay:0.5s]"
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

export default function () {
  return (
    <div
      id="files"
      class={[
        "grid w-full gap-[0.625rem] overflow-y-auto bg-[#313543] p-[0.625rem_1.5625rem] [border:1px_solid_#44495c] first:rounded-[30px]",
        "@1540:grid-cols-[calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)_calc(12.5%_-_8.75px)]",
        "@970:grid-cols-[calc(20%_-_8px)_calc(20%_-_8px)_calc(20%_-_8px)_calc(20%_-_8px)_calc(20%_-_8px)]",
        "@500:grid-cols-[calc(33.3%_-_6.66px)_calc(33.3%_-_6.66px)_calc(33.3%_-_6.66px)]",
        "grid-cols-[calc(50%_-_5px)_calc(50%_-_5px)]",
      ]}
      // max-h-[12.5rem]
    >
      {Static.data.media.map((item, index) => {
        return (
          <div
            id="preview"
            class="relative flex h-full min-h-[6.25rem] w-full items-center justify-center overflow-hidden [&_video]:h-full [&_video]:w-full"
          >
            {item.name ? (
              <video src={`/assets/upload/posts/${item.name}`}></video>
            ) : (
              <div>
                <img
                  class="h-full w-full object-cover"
                  src="/contents/images/posterBG.png"
                  alt="poster"
                />
                <RenderLoader index={index} />
                <RenderStopLoading index={index} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
