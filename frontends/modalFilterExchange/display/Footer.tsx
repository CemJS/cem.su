import { Cemjsx, Func, Static } from "cemjs-all";

export default function () {
  console.log("Static.filterCoins", typeof Static.filterCoins);

  return (
    <footer class="modal-footer">
      <div class="g-colEqual-2 mt-[15px]">
        <button
          class={["btn", "w-full"]}
          onclick={() => {
            Static.callback(Static.filterCoins);
            Func.close();
          }}
        >
          Применить
        </button>
        <div class="btn_border-wrap w-full">
          <button
            class="btn_border h100"
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
