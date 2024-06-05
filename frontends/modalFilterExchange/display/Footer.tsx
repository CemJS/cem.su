import { Cemjsx, Func, Static, front } from "cemjs-all";

export default function () {
  return (
    <footer class="modal-footer">
      <div class="mt-[.9375rem] grid grid-cols-2 gap-[1.5625rem]">
        <button
          class={[
            "h-[3.2rem] w-full cursor-pointer whitespace-nowrap rounded-[0.5rem] border-none px-[1rem] py-[0.8rem] text-[1rem] text-[--white] [background-size:125%] [background:--mainGradient] [outline:none] [transition:all_0.2s_ease-out] hover:bg-right active:scale-[0.97]",
          ]}
          onclick={() => {
            Static.callback(Static.filterCoins);
            Func.close();
          }}
        >
          {front.Variable?.words?.tools?.apply}
        </button>
        <div class="mx-auto w-full rounded-[--btnR] p-[0.0725rem] [background:var(--mainGradient)]">
          <button
            class="btn_border h-[3rem]"
            onclick={() => {
              Static.filterCoins = [];
            }}
          >
            {front.Variable?.words?.tools?.cancel}
          </button>
        </div>
      </div>
    </footer>
  );
}
