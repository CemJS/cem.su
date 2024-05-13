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
      <div class="relative w-full max-w-[30rem] rounded-[1.5rem] bg-[--backModal] p-[1.5rem] text-[--white] [box-shadow:0_0_15px_-10px_rgba(221,_221,_221,_0.5)]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
