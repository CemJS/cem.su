import { Cemjsx, Ref, Func } from "cemjs-all"
import Header from "./display/Header"
import Main from "./display/Main"
import Footer from "./display/Footer"

export default function () {
  return (
    <div class="modal" ref="modal" init={Func.show}
      onclick={(e: any) => {
        if (e.target === Ref.modalBody) {
          Func.close()
        }
      }}>
      <div class="modal_body" ref="modalBody">
        <div class="modal_content modal_content_lang">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  )
}