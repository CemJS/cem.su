import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"
import Table from "./Table"

export default function () {
  return (
    <section class="listTrade">
      <h1 class="general__title">Список бирж</h1>
      <div class="listTrade___table-wrapper">
        <Table />
      </div>
    </section >
  )
}