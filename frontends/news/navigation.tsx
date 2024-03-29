import { Cemjsx, Static } from "cemjs-all"
import Main from "./display/Main"
import Show from "./display/Show"
import Category from "./display/Category"

export default function () {
  if (Static.record) {
    return (
      <section class="pb-24">
        <Show />
      </section>
    );
  }
  return (
    <section class="mt-[65px]">
      {/* <Category /> */}
      <Main />
    </section>
  )

}