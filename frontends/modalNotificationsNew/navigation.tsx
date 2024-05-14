import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Languages from "./display/Languages"

export default function () {
  return (
    <div
      class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col items-end justify-end"
      ref="sidebarOverlay">
      <div
        class="bg-[#202432] w-full sm:w-[24rem] h-screen relative transition-all overflow-y-auto overflow-x-hidden border-l-[1px] border-solid border-[#363C50] translate-x-full"
        ref="sidebarWrap"
      >
        <div
          class="w-[200%] flex"
        >
          <div
            class="w-1/2 transition-all"
            ref="slideSection">
            <Header />
            <Main />
          </div>
          <div
            class="w-1/2 transition-all"
          >
            <Languages />
          </div>
        </div>
      </div>
    </div>
  )
}