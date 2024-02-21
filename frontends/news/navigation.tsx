import { Cemjsx, Static } from "cemjs-all"
import Main from "./display/Main"
import Show from "./display/Show"
import Category from "./display/Category"

export default function () {
  if (Static.record) {
    return (
      <section>
        <Show />
      </section>
    );
  }
  return (
    <section class="mt-55">
      {/* <Category /> */}
      <Main />
    </section>
  )

}