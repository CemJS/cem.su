import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Languages from "./display/Languages"

export default function () {
  return (
    <div
      // class="sidebar-overlay" 
      class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col items-end justify-end"
      ref="sidebarOverlay">
      <div
        // class="sidebar-wrap" 
        class="bg-[#202432] sidebar-wrap h-screen relative transition-all overflow-y-auto overflow-x-hidden border-l-[1px] border-solid border-[#2d3243]"
        ref="sidebarWrap"
      >
        <div
          class="sidebar-line flex"
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