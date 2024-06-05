import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import Card from "./Card";
import filter from "@svg/icon/filter.svg";

export default function () {
  return (
    <table class="relative w-full border-collapse">
      <thead class="text-[1.125rem]">
        <tr class="hidden grid-cols-3 @700:grid">
          <th class="hidden items-center justify-start px-[.9375rem] py-[.625rem] @700:flex">
            {front.Variable.words?.title}
          </th>
          <th class="hidden items-center justify-center px-[.9375rem] py-[.625rem] @700:flex">
            Коины
          </th>
          <th class="hidden items-center justify-end px-[.9375rem] py-[.625rem] @700:flex">
            <img
              class="h-[2.1875rem] w-[2.1875rem] cursor-pointer"
              src={filter}
              onclick={() =>
                Fn.initOne("modalFilterExchange", {
                  filterCoins: Static.filterCoins,
                  callback: async (filterCoinsFromModal: []) => {
                    Static.filterCoins = filterCoinsFromModal;
                    let res = front.Services.functions.sendApi(
                      "/api/exchanges",
                      {
                        coins: Static.filterCoins,
                      },
                    );
                    if (!filterCoinsFromModal.length) {
                      return;
                    }
                  },
                })
              }
            />
          </th>
        </tr>
      </thead>
      <tbody class="block rounded-tl-[--borderR] rounded-tr-[--borderR] border-none text-[1rem] font-medium @700:[border:1px_solid_var(--border)]">
        <div class="flex cursor-pointer items-center justify-center pb-[.9375rem] @700:!hidden">
          <img
            src={filter}
            onclick={() =>
              Fn.initOne("modalFilterExchange", {
                filterCoins: Static.filterCoins,
                callback: async (filterCoinsFromModal: []) => {
                  Static.filterCoins = filterCoinsFromModal;
                  let res = front.Services.functions.sendApi("/api/exchanges", {
                    coins: Static.filterCoins,
                  });
                  if (!filterCoinsFromModal.length) {
                    return;
                  }
                },
              })
            }
          />
        </div>
        {Static.records?.map((item: any, index: any) => {
          return (
            <div>
              <tr
                class="hidden grid-cols-3 items-center [border-bottom:1px_solid_var(--border)] @700:grid"
                isVisible={() => {
                  if (index == Static.records?.length - 3) {
                    Static.moreid =
                      Static.records[Static.records.length - 1]?._id;
                  }
                }}
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
              >
                <td class="flex items-center justify-start px-[.9375rem] py-[.625rem]">
                  {item?.name}
                </td>
                <td class="flex items-center justify-center px-[.9375rem] py-[.625rem]">
                  <div class="mt-[.625rem] flex">
                    {item?.listCoins?.map((el: any, index: number) => {
                      return (
                        <img
                          src={`/contents/coins/${el?.mediaName}.svg`}
                          class="h-[2rem] w-[2rem] [transition:_all_ease-in-out_0.3s] hover:[transform:translateY(-10px)]"
                        ></img>
                      );
                    })}
                  </div>
                </td>
                <td class="flex items-center justify-end px-[.9375rem] py-[.625rem]">
                  <div class="mx-0 mt-auto h-full w-[12.625rem] rounded-[--btnR] p-[0.0725rem] [background:var(--mainGradient)]">
                    <a href={item?.url} onclick={Fn.link}>
                      <button class="relative z-[1] h-[2.625rem] w-full min-w-[9.375rem] cursor-pointer overflow-hidden rounded-[--btnR] border-none bg-[--noble_black] text-center text-[1rem] font-semibold text-[--white] outline-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:h-full before:w-full before:opacity-0 before:content-[''] before:[background:var(--mainGradient)] before:[transition:all_0.3s_ease-in-out] hover:before:opacity-100">
                        Обменять
                      </button>
                    </a>
                  </div>
                </td>
              </tr>
              <Card item={item} index={index} />
            </div>
          );
        })}
      </tbody>
    </table>
  );
}
