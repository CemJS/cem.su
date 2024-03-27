import { Cemjsx, Fn, Static, front } from "cemjs-all"
import lineB from '@svg/lines/linesB.svg'
import Table from "./Table"

export default function () {
  return (
    <section class="listExchange effect_lines max-w-[77.5rem] my-0 mx-auto relative p-[60px_5%_80px_5%]">
      <h1 class="text-[clamp(2rem,_3vw,_2.5rem)] leading-[3.625rem] font-bold m-[0.625rem_0_1.5625rem_0] text-center text-balance">Список обменных пунктов</h1>
      <div class="">
        <Table />
      </div>
      {/* <img src={lineB} class="listExchange_lineB"></img> */}
    </section>
  )
}