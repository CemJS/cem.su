import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Footer from './display/Footer'

export default function () {
  return (
    <div class="min-h-full flex items-center justify-center p-6" ref="modalBody">
      <div
        // class="modal__content modal__content_lang"
        class="p-6 max-w-[30rem] rounded-xl relative w-full bg-[#202432] shadow-[0_0_15px_-10px_rgba(221,221,221,0.5);] text-white"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}