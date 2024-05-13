import { Cemjsx, Ref, Func } from "cemjs-all";
import Header from "./display/Header";
import Main from "./display/Main";

export default function () {
  return (
    <div
      class="flex h-full max-h-[100vh] items-center justify-center overflow-hidden p-[1.5rem] [backdrop-filter:blur(7px)]"
      ref="modalBody"
    >
      <div class="relative flex h-full w-full items-center justify-center rounded-[1.5rem] p-[1.5rem] text-white">
        {/* <Header /> */}
        <Main />
      </div>
    </div>
  );
}
