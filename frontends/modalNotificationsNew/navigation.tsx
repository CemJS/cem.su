import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Tabs from "./display/Tabs";

export default function () {
  return (
    <div
      class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col items-end justify-end"
      ref="sidebarOverlay">
      <div
        class="bg-[#202432] w-full md:w-3/6 2xl:w-4/12 h-screen relative transition-all overflow-y-auto overflow-x-hidden border-l-[1px] border-solid border-[#363C50] translate-x-full"
        ref="sidebarWrap"
      >
        <Header />
        <Tabs />
        <Main />
      </div>
    </div>
  )
}