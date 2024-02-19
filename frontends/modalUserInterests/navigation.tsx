import { Cemjsx, Ref, Func } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Footer from "./display/Footer"

export default function () {
  return (
    <div class="modal__body" ref="modalBody">
      <div class="modal__content modal__content_lang">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}