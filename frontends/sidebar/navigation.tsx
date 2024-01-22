import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Languages from "./display/Languages"

export default function () {
  return (
    <div class="sidebar-overlay" ref="sidebarOverlay">
      <div class="sidebar-wrap">
        <div class="sidebar-line">
          <div class="sidebar-line__section" ref="slideSection">
            <Header />
            <Main />
          </div>
          <div class="sidebar-line__section">
            <Languages />
          </div>
        </div>
      </div>
    </div>
  )
}