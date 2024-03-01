import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"
import Card from "./Card";

let stateCex: boolean = true
let stateDex: boolean = false

export default function () {
    return (
        <table class="list-trade__table table">
            <thead class="list-trade__table__head ">
                <div class="list-trade__btn-block">
                    <div ref="cex" class={stateCex ? "list-trade__btn tag__button tag__button_active" : "list-trade__btn tag__button"}
                        onclick={(e: any) => {
                            stateDex = false
                            stateCex = true
                            let res = front.Services.functions.sendApi("/api/events/Trades", {
                                "action": "get",
                                "category": "CEX",
                                "uuid": `${localStorage?.uuid}`,
                            })
                            Fn.init
                        }}>CEX</div>
                    <div ref="dex" class={stateDex ? "list-trade__btn tag__button tag__button_active" : "list-trade__btn tag__button"}
                        onclick={(e: any) => {
                            stateCex = false
                            stateDex = true
                            let res = front.Services.functions.sendApi("/api/events/Trades", {
                                "action": "get",
                                "category": "DEX",
                                "uuid": `${localStorage?.uuid}`,
                            })
                            Fn.init
                        }}>DEX</div>
                </div>
                <tr class="list-trade__table__row">
                    <th class="disable-table-name just-start">Название</th>
                    <th class="disable-table-name">Рейтинг</th>
                    <th class="disable-table-name">График</th>
                    <th class="list-trade__table list-trade__table_position-end">

                    </th>
                </tr>
            </thead>

            <tbody class="table_body list-trade__table__body">

                {
                    Static.records?.map((item: any, index: any) => {
                        return (
                            <div>
                                <tr
                                    class="table_row list-trade__table__row"
                                    isVisible={() => {
                                        if (index == Static.records.length - 3) {
                                            // console.log('=индкекс равен =', index, 'Static.records.length - 3', Static.records.length - 3)
                                            Static.moreid = Static.records[Static.records.length - 1]._id
                                            // fn("addEvent")
                                        }
                                    }}
                                    init={($el: any) => {
                                        if (index == Static.records?.length - 1) {
                                            const observer = new IntersectionObserver((entries) => {
                                                entries.forEach(async entry => {
                                                    if (entry.isIntersecting) {
                                                        observer.unobserve($el)
                                                        let res = front.Services.functions.sendApi("/api/events/Trades", {
                                                            "action": "skip",
                                                            "category": Static.tradeFilter.cat,
                                                            "skip": Static.records?.length,
                                                            "uuid": `${localStorage?.uuid}`,
                                                        })
                                                    }
                                                })
                                            })
                                            observer.observe($el)
                                        }
                                    }}>

                                    <td class="just-start">
                                        <img class="crypto_coin_icon"
                                            src={`/assets/upload/worldPress/${item?.mediaName}`}>
                                        </img>
                                        {/* {item?.name} */}
                                    </td>
                                    <td class="just-start" style="justify-content: center">{item?.score}</td>
                                    <td class="table_graph just-start" style="justify-content: center">
                                        <img
                                            class="trades-chart"
                                            src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item.marketId}.svg`}
                                        >
                                        </img>
                                    </td>
                                    <td class="list-trade__table__btn">
                                        <div class="btn_border-wrap mY-auto h100">
                                            <a href={item?.url} onclick={Fn.link}>
                                                <button class="btn_border bg-mw">
                                                    Торговать
                                                </button>
                                            </a>
                                        </div>
                                        {/* <a class="btn_border-wrap btn_border" >
                          <span>Торговать</span>
                        </a> */}
                                    </td>
                                </tr>
                                <Card item={item} index={index} />
                            </div>
                        )
                    })
                }
            </tbody>
        </table>
    )
}