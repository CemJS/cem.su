import { Cemjsx, Fn, Func, front, Static, Events } from "cemjs-all";
import addMedia from "@svg/profile/addMedia.svg";
import iconSettings from "@svg/profile/iconSettings.svg";
import Video from "@elements/Video";
import { Post } from "types/post.type";

export default function () {
  return (
    <div class="grid w-full [grid-template-columns:repeat(3,_minmax(60px,1fr))]">
      {Static.questions?.map((item: any, index: number) => {
        return (
          <div
            id="item"
            onclick={() => {
              Fn.linkChange(`/question/show/${item.id}`);
            }}
            key={index}
            class="text block aspect-square"
            init={($el) => {
              if (index == Static.questions?.length - 1) {
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {
                      observer.unobserve($el);
                      let skip = { ...Static.makeFilter };
                      skip.skip = Static.questions.length;
                      let res = await front.Services.functions.sendApi(
                        "/api/me/questions",
                        skip,
                      );
                    }
                  });
                });
                observer.observe($el);
              }
            }}
          >
            <figure class="relative z-[1] m-0 flex h-full items-center justify-center overflow-hidden px-3 text-center [border-bottom:0.5px_solid_#353C50] [border-left:0.5px_solid_#353C50] [&:nth-child(1)]:[border-top:0.5px_solid_#353C50] [&:nth-child(2)]:[border-top:0.5px_solid_#353C50] [&:nth-child(3)]:[border-top:0.5px_solid_#353C50] [&:nth-child(3n+3)]:[border-right:0.5px_solid_#353C50]">
              {item?.media?.length > 0 ? (
                item?.media[0]?.type === "video" ? (
                  <video
                    poster={item?.media[0].preview}
                    src={`/assets/upload/gallery/${item?.media[0]?.mediaName}`}
                    key={item?.media[0]?.mediaName + index}
                  />
                ) : item?.media[0]?.type === "image" ? (
                  <img
                    class="absolute h-auto min-h-full min-w-full cursor-pointer bg-[#1D2029] bg-contain bg-no-repeat object-cover"
                    src={`/assets/upload/posts/${item?.media[0]?.mediaName}`}
                    alt=""
                  />
                ) : item?.media[0]?.type === "audio" ? (
                  <div class="w-full">
                    <audio-player
                      src={`/assets/upload/posts/${item?.media[0]?.mediaName}`}
                    />
                  </div>
                ) : (
                  ""
                )
              ) : item?.text ? (
                item?.text
              ) : (
                item?.title
              )}
              {item?.media?.length <= 0 || item?.media == null ? (
                <div
                  id="bg"
                  class="absolute bottom-[0.5px] left-[0.5px] right-[0.5px] top-[0.5px] z-[-1] h-full w-full"
                >
                  <img
                    class="relative z-[-1] h-full w-full"
                    src="/contents/images/posterBG.png"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </figure>
          </div>
        );
      })}
    </div>
  );
}
