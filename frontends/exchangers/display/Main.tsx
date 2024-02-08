import { Cemjsx, Fn, Static, front } from "cemjs-all"
import lineB from '@svg/lines/linesB.svg'
import Table from "./Table"

export default function () {
  return (
    <section class="listExchange effect_lines">
      <h1 class="general__title">Список обменных пунктов</h1>
      <div class="listExchange_table_wrapper">
        <Table />
      </div>
      {/* <img src={lineB} class="listExchange_lineB"></img> */}
    </section>
  )
}