import { Cemjsx } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"

export default function () {
  return (
    <div class="modal__body" ref="modalBody">
      <div class="modal__content">
        <Header />
        <Main />
      </div>
    </div>
  )
}