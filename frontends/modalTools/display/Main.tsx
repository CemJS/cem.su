import { Cemjsx, Static, Func, Ref, front } from "cemjs-all";

export default function () {
  return (
    <div
      class="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-end [background:rgba(0,0,0,0.5)]"
      ref="bottomSheetOverlay"
    >
      {/* content */}
      <div
        id="content"
        class="relative h-[45vh] max-h-screen w-full max-w-[30rem] rounded-[1rem_1rem_0_0] bg-[--backModal] p-[1.5rem_1.8rem] [transform:translateY(100%)] [transition:var(--tran-03)]"
        ref="bottomSheetContent"
      >
        <div id="header" class="flex justify-center">
          <div
            class="-mt-4 cursor-grab select-none p-4"
            onmouseup={() => {
              Func.dragStop;
            }}
            onmousedown={(e) => {
              Func.dragStart(e);
            }}
            onmousemove={(e) => {
              Func.dragging(e);
            }}
          >
            <span class="block h-1 w-10 rounded-[6px] bg-slate-700"></span>
          </div>
        </div>
        {/* body */}
        <div class="h-full overflow-y-auto p-[1rem_0_2.5rem]">
          {/* <h2 class="bottomSheet-title">Tools</h2> */}
          <ul class="flex flex-col gap-2" role="list">
            <li
              class="cursor-pointer rounded-[1rem] border border-solid border-slate-700 bg-slate-700 p-[0.8rem] text-center font-medium [transition:var(--tran-03)] hover:border-slate-700 hover:bg-slate-800 active:bg-slate-900"
              onclick={() => {
                Func.share();
              }}
            >
              Поделиться
            </li>

            {Static.records?.map((item: any, index: number) => {
              return (
                <li
                  onclick={() => {
                    item.func();
                    Func.close();
                  }}
                  class={[
                    "cursor-pointer rounded-[1rem] border border-solid border-slate-700 bg-slate-700 p-[0.8rem] text-center font-medium [transition:var(--tran-03)] hover:border-slate-700 hover:bg-slate-800 active:bg-slate-900",
                    item.type == "danger" ? "text-red-600" : null,
                  ]}
                >
                  {item.name}
                </li>
              );
            })}

            <li
              class="mt-[15px] cursor-pointer rounded-[1rem] border border-solid border-slate-700 bg-slate-700 p-[0.8rem] text-center font-medium [transition:var(--tran-03)] hover:border-slate-700 hover:bg-slate-800 active:bg-slate-900"
              onclick={() => {
                Func.close();
              }}
            >
              Отмена
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
