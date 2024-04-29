import { Cemjsx } from "cemjs-all";
import Header from "./display/Header";
import Main from "./display/Main";
import Footer from "./display/Footer";

export default function () {
  return (
    <div
      class="flex min-h-full items-center justify-center p-6"
      ref="modalBody"
    >
      <div
        // class="[background:var(--backModal)] relative w-full max-w-[800px] rounded-[1.5rem] p-[1.5rem] text-white [box-shadow:0_0_15px_-10px_rgba(221,221,221,0.5)] [background:var(--backModal)] relative w-full max-w-[800px] rounded-[1.5rem] p-[1.5rem] text-white [box-shadow:0_0_15px_-10px_rgba(221,221,221,0.5)]_lang"
        class="relative w-full max-w-[30rem] rounded-xl bg-[#202432] p-6 text-white shadow-[0_0_15px_-10px_rgba(221,221,221,0.5);]"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
