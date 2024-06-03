import { Cemjsx, Static, front } from "cemjs-all"
import star from '@svg/icon/star.svg'
import Table from "./Table"

export default function () {

    return (
        <section class="exchangerates">
            <div>
                <h1 class="text-[clamp(2rem,_3vw,_2.5rem)] leading-[3.625rem] font-bold m-[0.625rem_0_1.5625rem_0] text-center text-balance">
                    {front.Variable.words?.exchangeRates}
                </h1>
              <Table />
            </div>
            {/* <img src={lineB} class="listExchange_lineB"></img> */}
        </section>
    )
}