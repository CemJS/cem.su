import { Cemjsx, Static } from "cemjs-all"
import star from '@svg/icon/star.svg'
import Table from "./Table"

export default function () {

    return (
        <section class="exchangerates effect_lines">
            <div>
                <h1 class="general__title">Курсы валют</h1>
              <Table />
            </div>
            {/* <img src={lineB} class="listExchange_lineB"></img> */}
        </section>
    )
}