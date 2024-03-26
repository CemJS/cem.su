import { Cemjsx, Func, Static, Fn, Ref } from "cemjs-all";
import notFound from "@svg/notFound.svg";

const RenderSearch = function () {
  return (
    <div
      class={[
        "w-full relative h-[3.125rem] leading-[3.125rem]",
        Static.searchText ? "h-[30px] leading-[30px] [transform:translate(-15px,_-16px)] scale-[0.88] z-[5] top-0" : null,
      ]}
    >
      <input
      class="peer absolute w-full [outline:none] focus:[&.in-viewTest]:opacity-0 text-[1rem] py-0 px-[1.875rem] leading-[3.125rem] rounded-[--borderR] [border:1px_solid_var(--fiolet)] bg-transparent [transition:border_0.1s_ease] z-[3] text-[--white] resize-none font-ie"
        type="text"
        autocomplete="off"
        oninput={(e: any) => {
          Static.searchText = e.target.value.toLowerCase();
          Static.coins = Static.records.filter((item) => {
            if (item.name.toLowerCase().includes(Static.searchText)) {
              return true;
            }
          });
        }}
      />
      <div class="peer-focus:h-[1.875rem] peer-focus:leading-[1.875rem] peer-focus:[transform:translate(-15px,_-16px)_scale(0.88)] peer-focus:z-[5] absolute text-[1rem] py-0 px-[.625rem] my-0 mx-[1.25rem] bg-[--backModal] [transition:0.2s_ease] flex items-center gap-[.625rem] text-[--secondary-text]">
        <i class="i-user text-[1.3rem] !font-['cemicons'] normal-case [-webkit-font-smoothing:antialiased] [font-style:normal] [font-variant:normal] [font-weight:normal] leading-[1] before:content-['\e920']"></i>
        <span class="">Поиск</span>
      </div>
    </div>
  );
};

const RenderNotFound = function () {
  return (
    <div class="notFound absolute top-[50%] left-[50%] [transform:translate(-50%,_-50%)] flex items-center justify-center flex-col z-0 gap-[0.5rem]">
      <img src={notFound} alt="Not found" />
      <span>Не найдено</span>
    </div>
  );
};

const RenderListCoins = function ({ coins }) {
  // console.log("coins", coins);
  
  return (
    <ul class="@464:grid-cols-2 grid-cols-1 [grid-template-rows:auto] @464:[grid-template-rows:repeat(auto-fill,_3rem)] gap-[ 0.6rem] overflow-x-hidden min-h-[23rem] h-[23rem] overflow-y-auto
    min-height: 23rem;
    height: 23rem;
    overflow-x: hidden;">
      {coins?.map((item) => {
        // Fn.log('=125deb=', item)
        return (
          <li
            class={[
              "m-[.3125rem] p-[0.6rem] h-fit cursor-pointer [transition:var(--tran-03)] rounded-[--borderR] flex items-center gap-[0.5rem] bg-transparent [border:1px_solid_var(--border-color)] hover:[background-image:var(--mainGradient)]",
              Static.filterCoins?.includes(item?.name)
                ? "[background-image:var(--mainGradient)]"
                : null,
            ]}
            onclick={() => {
              if (Static.filterCoins?.includes(item?.name)) {
                Static.filterCoins?.splice(
                  Static.filterCoins?.indexOf(item?.name),
                  1,
                );
              } else {
                Static.filterCoins?.push(item?.name);
              }
            }}
          >
            <img
              src={`/contents/coins/${item?.mediaName}.svg`}
              alt={item?.name}
            />
            <span>{item?.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default function () {
  return (
    <main class="w-[80ch] max-w-full ">
      <RenderSearch />

      <div class="mt-[.9375rem] relative h-[23rem] min-h-[23rem]">
        {Static.coins.length > 0 ? (
          <RenderListCoins coins={Static.coins} />
        ) : (
          <RenderNotFound />
        )}
      </div>
    </main>
  );
}
