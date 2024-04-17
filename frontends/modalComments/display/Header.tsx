import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function () {
  return (
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
  );
}
