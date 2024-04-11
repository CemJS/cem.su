import { Cemjsx, Func, Ref, Static } from "cemjs-all";
import Main from "./display/Main";

export default function () {
  return (
    <div
      class={[
        "fixed right-[1.3rem] top-[10%] z-[15] opacity-0 [transition:all_0.5s_ease]",
        Static.type,
      ]}
      ref="notice"
      init={Func.show}
    >
      <Main />
      {/* <span class="notice_close" onclick={Func.close}>
        x
      </span> */}
    </div>
  );
}
