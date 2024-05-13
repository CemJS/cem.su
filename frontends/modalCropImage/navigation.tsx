import { Cemjsx, Ref, Func } from "cemjs-all";
import Header from "./display/Header";
import Main from "./display/Main";

export default function () {
  return (
    <div
      class="flex min-h-full items-center justify-center p-[1.5rem]"
      ref="modalBody"
    >
      <div
        id="content"
        class="relative w-full max-w-[500px] rounded-[1.5rem] p-[1.5rem] text-white [background:var(--backModal)] [box-shadow:0_0_15px_-10px_rgba(221,221,221,0.5)]"
      >
        <Header />
        <Main />
      </div>
    </div>
  );
}
