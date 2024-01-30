import { Cemjsx, Func, Ref, Static } from "cemjs-all";
import Main from "./display/Main";

export default function () {
  return (
    <div
      class={["notice", Static.type]}
      ref="notice"
      init={Func.show}
    >
      <Main />
      <span
        class="notice_close"
        onclick={Func.close}
      >
        x
      </span>
    </div>
  );
}
