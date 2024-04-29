import { Cemjsx, Ref, Func } from "cemjs-all";
import Header from "./display/Header";
import Main from "./display/Main";
import Footer from "./display/Footer";

export default function () {
  return (
    <div
      class="flex min-h-full items-center justify-center p-[1.5rem]"
      ref="modalBody"
    >
      <div class="[box-shadow:0_0_15px_-10px_rgba(221,221,221,0.5)]_lang relative relative w-full w-full max-w-[800px] max-w-[800px] rounded-[1.5rem] rounded-[1.5rem] p-[1.5rem] p-[1.5rem] text-white text-white [background:var(--backModal)] [background:var(--backModal)] [box-shadow:0_0_15px_-10px_rgba(221,221,221,0.5)]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
