import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";

export default function () {
  return (
    <header class="sidebar-header">
      <button class="btn btn_dark" onclick={Func.close}>
        <i class="i i-x-mark"></i>
      </button>
    </header>
  );
}
