import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";

export default function () {
  return (
    <main id="modal_main">
      <div id="image-counteiner" class="max-h-[458px] w-full">
        <img class="block w-full max-w-full" ref="image" id="image" />
      </div>
      <div id="ration__buttons" class="my-3 flex w-full justify-between">
        <button
          id="ratio"
          class="h-[48px] w-full rounded-s-[5px] border border-[#0d6efd]"
        >
          16:9
        </button>
        <button id="ratio" class="h-[48px] w-full border border-[#0d6efd]">
          4:3
        </button>
        <button id="ratio" class="h-[48px] w-full border border-[#0d6efd]">
          1:1
        </button>
        <button id="ratio" class="h-[48px] w-full border border-[#0d6efd]">
          2:3
        </button>
        <button
          id="ratio"
          class="h-[48px] w-full rounded-e-[5px] border border-[#0d6efd]"
        >
          Auto
        </button>
      </div>
      <div class="flex justify-between">
        <div class="btn !w-[48%]">Загрузить</div>
        <div class="btn !w-[48%]">Отменить</div>
      </div>
    </main>
  );
}
