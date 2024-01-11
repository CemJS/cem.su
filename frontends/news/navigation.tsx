import { Cemjsx, Static } from "cemjs-all"
import Main from "./display/Main"
import Show from "./display/Show"
import HeaderBack from "./display/HeaderBack"
import Category from "./display/Category"

export default function () {
  if (Static.records.length > 1) {
    return (
      <section>
        <HeaderBack titleHead="Новости" />
        <Category />
        <Main />
      </section>
    )
  }

  return (
    <section>
      <HeaderBack titleHead={Static.record?.title} />
      <Show />
    </section>
  )
}