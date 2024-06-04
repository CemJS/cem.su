import { Cemjsx, Func, Static, Fn, Ref } from "cemjs-all";
import notFound from "@svg/notFound.svg";

const RenderSearch = function () {
  return (
    <div
      class={[
        "relative h-[3.125rem] w-full leading-[3.125rem]",
        Static.searchText
          ? "top-0 z-[5] h-[30px] scale-[0.88] leading-[30px] [transform:translate(-15px,_-16px)]"
          : null,
      ]}
    >
      <input
        class="font-ie peer absolute z-[3] w-full resize-none rounded-[--borderR] bg-transparent px-[1.875rem] py-0 text-[1rem] leading-[3.125rem] text-[--white] [border:1px_solid_var(--fiolet)] [outline:none] [transition:border_0.1s_ease] focus:[&.in-viewTest]:opacity-0"
        type="text"
        autocomplete="off"
        oninput={(e: any) => {
          Static.searchText = e.target.value.toLowerCase();
          Static.coins = Static.records?.filter((item) => {
            if (item.name.toLowerCase()?.includes(Static.searchText)) {
              return true;
            }
          });
        }}
      />
      <div class="absolute mx-[1.25rem] my-0 flex items-center gap-[.625rem] bg-[--backModal] px-[.625rem] py-0 text-[1rem] text-[--secondary-text] [transition:0.2s_ease] peer-focus:z-[5] peer-focus:h-[1.875rem] peer-focus:leading-[1.875rem] peer-focus:[transform:translate(-15px,_-16px)_scale(0.88)]">
        <i class="i-user !font-['cemicons'] text-[1.3rem] normal-case leading-[1] [-webkit-font-smoothing:antialiased] [font-style:normal] [font-variant:normal] [font-weight:normal] before:content-['\e920']"></i>
        <span class="">Поиск</span>
      </div>
    </div>
  );
};

const RenderNotFound = function () {
  return (
    <div class="notFound absolute left-[50%] top-[50%] z-0 flex flex-col items-center justify-center gap-[0.5rem] [transform:translate(-50%,_-50%)]">
      <img src={notFound} alt="Not found" />
      <span>Не найдено</span>
    </div>
  );
};

const RenderListCoins = function ({ coins }) {
  // console.log("coins", coins);

  return (
    <ul
      class="gap-[ 0.6rem] min-height: 23rem; height: 23rem; overflow-x: hidden; h-[23rem] min-h-[23rem]
    grid-cols-1 overflow-y-auto
    overflow-x-hidden [grid-template-rows:auto]
    @464:grid-cols-2 @464:[grid-template-rows:repeat(auto-fill,_3rem)]"
    >
      {coins?.map((item) => {
        // Fn.log('=125deb=', item)
        return (
          <li
            class={[
              "m-[.3125rem] flex h-fit cursor-pointer items-center gap-[0.5rem] rounded-[--borderR] bg-transparent p-[0.6rem] [border:1px_solid_var(--border-color)] [transition:var(--tran-03)] hover:[background-image:var(--mainGradient)]",
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

      <div class="relative mt-[.9375rem] h-[23rem] min-h-[23rem]">
        {Static.coins?.length > 0 ? (
          <RenderListCoins coins={Static.coins} />
        ) : (
          <RenderNotFound />
        )}
      </div>
    </main>
  );
}
