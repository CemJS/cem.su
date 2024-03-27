import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import Card from "./Card";

Static.stateCex = true;
Static.stateDex = false;

export default function () {
  console.log("Static.records", Static.records);

  return (
    <table class="relative w-full border-collapse">
      <thead class="text-[1.125rem]">
        <div class="flex justify-center max-[700px]:pb-[1.875rem]">
          <div
            ref="cex"
            class={[
              "relative z-[1] mr-[.625rem] flex h-[2.625rem] cursor-pointer items-center rounded-[3.125rem] px-[1.5625rem] py-0 text-center text-[1rem] font-semibold leading-[1rem] [background:#363B4B] [border:1px_solid_#63697A] [transition:1s] after:absolute after:left-0 after:top-[-1px] after:z-[-10] after:h-[2.625rem] after:w-full after:rounded-[50px] after:content-[''] after:[background:linear-gradient(89.03deg,_#2c66b8_0.54%,_#8859ec_97.66%)] after:[transition:1s] hover:after:opacity-100",
              Static.stateCex
                ? "border-transparent [background:none] after:opacity-100"
                : "after:opacity-0",
            ]}
            onclick={(e: any) => {
              Static.stateDex = false;
              Static.stateCex = true;
                let res = front.Services.functions.sendApi("/api/exchangers", {
                  action: "get",
                  category: "CEX",
                  uuid: `${localStorage?.uuid}`,
                });
            }}
          >
            CEX
          </div>
          <div
            ref="dex"
            class={[
              "relative z-[1] flex h-[2.625rem] cursor-pointer items-center rounded-[3.125rem] px-[1.5625rem] py-0 text-center text-[1rem] font-semibold leading-[1rem] [background:#363B4B] [border:1px_solid_#63697A] [transition:1s] after:absolute after:left-0 after:top-[-1px] after:z-[-10] after:h-[2.625rem] after:w-full after:rounded-[50px] after:opacity-0 after:content-[''] after:[background:linear-gradient(89.03deg,_#2c66b8_0.54%,_#8859ec_97.66%)] after:[transition:1s] hover:after:opacity-100",
              Static.stateDex
                ? "border-transparent [background:none] after:!opacity-100"
                : "after:opacity-0",
            ]}
            onclick={(e: any) => {
              Static.stateCex = false;
              Static.stateDex = true;
                let res = front.Services.functions.sendApi("/api/exchangers", {
                  action: "get",
                  category: "DEX",
                  uuid: `${localStorage?.uuid}`,
                });
            }}
          >
            DEX
          </div>
        </div>
        <tr class="hidden min-h-[5rem] grid-cols-4 items-center @700:grid">
          <th class="hidden items-center justify-start px-[.625rem] py-0 @700:flex">
            Название
          </th>
          <th class="hidden px-[.625rem] @700:flex justify-start">Рейтинг</th>
          <th class="hidden px-[.625rem] @700:flex justify-start">График</th>
          <th class="flex justify-end px-[.625rem]"></th>
        </tr>
      </thead>

      <tbody class="block rounded-tl-[--borderR] rounded-tr-[--borderR] border-none text-[1rem] font-medium @700:[border:1px_solid_var(--border)]">
        {Static.records?.map((item: any, index: any) => {
          return (
            <div>
              <tr
                class="hidden min-h-[5rem] grid-cols-4 items-center @700:grid [border-bottom:1px_solid_var(--border)] py-[.625rem] px-[.9375rem]"
                isVisible={() => {
                  if (index == Static.records.length - 3) {
                    // console.log('=индкекс равен =', index, 'Static.records.length - 3', Static.records.length - 3)
                    Static.moreid =
                      Static.records[Static.records.length - 1]._id;
                    // fn("addEvent")
                  }
                }}
                init={($el: any) => {
                  if (index == Static.records?.length - 1) {
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(async (entry) => {
                        if (entry.isIntersecting) {
                          observer.unobserve($el);
                          let res = front.Services.functions.sendApi(
                            "/api/exchangers",
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
                <td class="flex items-center justify-start">
                  <img
                    class="relative top-[-.125rem] mr-[10px] max-h-[2.5rem]"
                    src={`/assets/upload/worldPress/${item?.mediaName}`}
                  ></img>
                  {/* {item?.name} */}
                </td>
                <td class="flex items-center justify-start">{item?.score}</td>
                <td class="flex items-center justify-start">
                  <img
                    class="[filter:hue-rotate(226deg)_saturate(210%)_brightness(0.7)_contrast(170%)] static h-[4rem] p-[0_0_5px_0]"
                    src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item.marketId}.svg`}
                  ></img>
                </td>
                <td class="pl-[.625rem] @410:justify-center flex max-w-[100%] items-center justify-end @700:justify-end">
                  <div class="mx-0 mt-auto h-full w-[12.625rem] rounded-[--btnR] p-[0.0725rem] [background:var(--mainGradient)]">
                    <a href={item?.url} onclick={Fn.link}>
                      <button class="relative z-[1] h-[2.625rem] w-full min-w-[9.375rem] cursor-pointer overflow-hidden rounded-[--btnR] border-none bg-[--noble_black] text-center text-[1rem] font-semibold text-[--white] outline-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:h-full before:w-full before:opacity-0 before:content-[''] before:[background:var(--mainGradient)] before:[transition:all_0.3s_ease-in-out] hover:before:opacity-100">
                        Торговать
                      </button>
                    </a>
                  </div>
                  {/* <a class="btn_border-wrap btn_border" >
                          <span>Торговать</span>
                        </a> */}
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
