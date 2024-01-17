import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"

export default function () {
  return (
    <div class="sidebar-overlay" ref="sidebarOverlay">
      <div class="sidebar-wrap">
        <Header />
        <Main />
      </div>
    </div>
  )
}