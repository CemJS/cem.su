import { Cemjsx, Func, Static } from "cemjs-all";

export default function () {
  // console.log("Static.filterCoins", typeof Static.filterCoins);

  return (
    <footer class="modal-footer">
      <div class="grid grid-cols-2 gap-[1.5625rem] mt-[.9375rem]">
        <button
          class={["h-[3.2rem] w-full cursor-pointer whitespace-nowrap rounded-[0.5rem] border-none px-[1rem] py-[0.8rem] text-[1rem] text-[--white] [background-size:125%] [background:--mainGradient] [outline:none] [transition:all_0.2s_ease-out] hover:bg-right active:scale-[0.97]"]}
          onclick={() => {
            Static.callback(Static.filterCoins);
            Func.close();
          }}
        >
          Применить
        </button>
        <div class="w-full mx-auto rounded-[--btnR] p-[0.0725rem] [background:var(--mainGradient)]">
          <button
            class="btn_border h-[3rem]"
            onclick={() => {
              Static.filterCoins = [];
              // Static.callback(Static.filterCoins)
            }}
          >
            Сбросить
          </button>
        </div>
      </div>
    </footer>
  );
}
