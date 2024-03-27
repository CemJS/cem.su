import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";

export default function ({ item, index }) {
  return (
    <div
      init={($el: any) => {
        if (index == Static.records?.length - 1) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
              if (entry.isIntersecting) {
                observer.unobserve($el);
                let res = front.Services.functions.sendApi(
                  "/api/exchanges",
                  {
                    skip: Static.records?.length,
                  },
                );
              }
            });
          });
          observer.observe($el);
        }
      }}
      class="flex items-center justify-center @700:hidden"
    >
      <div class="mb-[.9375rem] w-full max-w-[31.25rem] rounded-[--borderR] bg-[#3b3d49] p-[.625rem]">
        <div class="flex flex-col items-center justify-between p-[0_10px_15px_10px]">
          <div class="pt-[.625rem] text-center text-[1.125rem]">
            {item?.name}
          </div>
          <div class="flex pt-[1.25rem] text-center text-[1.125rem]">
            {item.listCoins?.map((el: any, index: number) => {
              // console.log("el", el);

              return (
                <img
                  src={`/contents/coins/${el?.mediaName}.svg`}
                  class="h-[2rem] w-[2rem] [transition:_all_ease-in-out_0.3s] hover:[transform:translateY(-10px)]"
                ></img>
              );
            })}
          </div>
        </div>
        <div class="flex w-full justify-center pb-[.625rem] pt-[.625rem]">
          <div class="mx-0 mt-auto h-full w-[12.625rem] rounded-[--btnR] p-[0.0725rem] [background:var(--mainGradient)]">
            <a href={item?.url} onclick={Fn.link}>
              <button class="relative z-[1] h-[2.625rem] w-full min-w-[9.375rem] cursor-pointer overflow-hidden rounded-[--btnR] border-none bg-[#3b3d49] text-center text-[1rem] font-semibold text-[--white] outline-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:h-full before:w-full before:opacity-0 before:content-[''] before:[background:var(--mainGradient)] before:[transition:all_0.3s_ease-in-out] hover:before:opacity-100">
                Обменять
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
