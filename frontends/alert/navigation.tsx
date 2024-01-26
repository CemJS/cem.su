import { Cemjsx, Func, Ref } from "cemjs-all"
import Main from "./display/Main"

export default function () {
  return (
    <div class="notice" ref="notice" init={Func.show}>
      <Main />
      <span class="notice_close" onclick={Func.close}>x</span>
    </div>
  )
}