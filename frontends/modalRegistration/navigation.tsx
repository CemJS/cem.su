import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"

export default function () {
  return (
    <div class="min-h-full flex items-center justify-center p-6" ref="modalBody">
      <div class="rounded-3xl max-w-3xl w-full relative p-6 text-white bg-[#202432]">
        <Header />
        <Main />
      </div>
    </div>
  )
}