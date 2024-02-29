import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"
import Table from "./Table"

export default function () {
  return (
    <section class="list-trade">
      <h1 class="general__title">Список бирж</h1>
      <div class="list-trade___table">
        <Table />
      </div>
    </section >
  )
}