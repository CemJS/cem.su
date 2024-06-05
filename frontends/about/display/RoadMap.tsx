import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import arrowUp from "@svg/about/roadmap/arrowUp.svg";

const RenderRoadMap = function ({ items }) {
  return (
    <div class="roadmapNew">
      <h1 class="z-[1] mx-0 my-[1.5625rem] text-balance text-center text-[clamp(1.875rem,5vw,2.75rem)] font-bold leading-normal text-[#FFFFFF]">
        {front.Variable?.words?.chapters?.roadmap}
      </h1>
      <div class="relative mx-auto my-[3.125rem] max-w-[1080px] px-[1.25rem] py-0 text-[#2B3040] ">
        <div class="absolute left-[2.5rem] top-[1.25rem] h-full w-[.25rem] bg-[white] [animation:moveline_5s_linear_forwards] [transform:translateX(-50%)] @772:left-[50%]">
          <div class="absolute bottom-[0] left-[50%] flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[50%] bg-[#f2f2f2] shadow-[0_0_0_4px_#fff,_inset_0_2px_0_#00000014,_0_3px_0_4px_#0000000d] [transform:translateX(-50%)]">
            <img class="w-[1.25rem]" src={arrowUp} alt="Icon" />
          </div>
        </div>
        {items.map((item: any, index: number) => {
          return (
            <div
              class={[
                "justify-start[transition:all_1s_ease-in-out] invisible relative  z-[3] flex opacity-0 max-[772px]:m-[1.875rem_0_.1875rem_3.75rem] [&.in-view]:visible [&.in-view]:opacity-100 [&.in-view_section]:transform-none",
                index === 0
                  ? "top-0"
                  : index === 1
                    ? "top-[15px] justify-end [transition:all_0.8s_ease-in-out]"
                    : index === 2
                      ? "top-[15px] justify-start [transition:all_1.2s_ease-in-out]"
                      : index === 3
                        ? "top-[15px] justify-end [transition:all_1.5s_ease-in-out]"
                        : index === 4
                          ? "top-[15px] justify-start [transition:all_1.8s_ease-in-out]"
                          : index === 5
                            ? "top-[15px] justify-end [transition:all_2.1s_ease-in-out]"
                            : index === 6
                              ? "top-[15px] justify-start [transition:all_2.4s_ease-in-out]"
                              : "",
              ]}
              init={($el: any) => observerRoadmap.observe($el)}
            >
              <section
                class={[
                  "relative top-[1.875rem] w-[calc(50%_-_2.5rem)] rounded-[1rem] bg-[white] p-[20px] [transition:all_0.5s_ease-in-out] before:absolute before:top-[1.875rem] before:z-0 before:h-[.9375rem] before:w-[.9375rem] before:bg-[white] before:content-[''] before:[transform:rotate(45deg)] odd:[transform:translate3d(-100px,_-10px,_0)_rotate(10deg)] even:[transform:translate3d(-100px,_-10px,_0)_rotate(10deg)] max-[772px]:w-full",
                  index === 0
                    ? "before:right-[-.4375rem] max-[772px]:before:left-[-7px] max-[772px]:before:right-auto"
                    : index === 1
                      ? "before:left-[-.4375rem]"
                      : index === 2
                        ? "before:right-[-.4375rem] max-[772px]:before:left-[-7px] max-[772px]:before:right-auto"
                        : index === 3
                          ? "before:left-[-.4375rem]"
                          : index === 4
                            ? "before:right-[-.4375rem] max-[772px]:before:left-[-7px] max-[772px]:before:right-auto"
                            : index === 5
                              ? "before:left-[-.4375rem]"
                              : index === 6
                                ? "before:right-[-.4375rem] max-[772px]:before:left-[-7px] max-[772px]:before:right-auto"
                                : "",
                ]}
              >
                <div
                  class={[
                    "absolute flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#f2f2f2] shadow-[0_0_0_4px_white,_inset_0_2px_0_#00000014,_0_3px_0_4px_#0000000d] max-[772px]:left-[-60px]",
                    index === 0
                      ? "right-[-60px]"
                      : index === 1
                        ? "left-[-60px]"
                        : index === 2
                          ? "right-[-60px]"
                          : index === 3
                            ? "left-[-60px]"
                            : index === 4
                              ? "right-[-60px]"
                              : index === 5
                                ? "left-[-60px]"
                                : index === 6
                                  ? "right-[-60px]"
                                  : "",
                  ]}
                >
                  <img class="w-[1.25rem]" src={item.icon} alt="Иконка" />
                </div>
                <div class="flex justify-between">
                  <span class="text-[clamp(22px,_5vw,_16px)] font-semibold">
                    {item.title}
                  </span>
                </div>
                <p class="mx-0 my-[.625rem] p-0 text-[clamp(18px,_5vw,_14px)] font-normal">
                  {item.desc}
                </p>
                <span class="text-[clamp(22px,_5vw,_16px)] font-semibold">
                  {item.date}
                </span>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const observerRoadmap = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    item.target.classList.toggle("in-view", item?.isIntersecting);
  });
});

export default function () {
  return (
    <div>
      <RenderRoadMap items={Static.roadmap}></RenderRoadMap>
    </div>
  );
}
