import { Cemjsx, Static } from "cemjs-all"
import star from '@svg/icon/star.svg'
import lineB from '@svg/lines/linesB.svg'

Static.records1 = [
    {
        nameCoin: 'btc',
        currentCours: "142 543.1",
        change: '-1.22%'
    },
    {
        nameCoin: 'BTC',
        currentCours: "142 543.1",
        change: '-1.22%'
    },
   
    {
        nameCoin: 'BTC',
        currentCours: "142 543.1",
        change: '-1.22%'
    },
    {
        nameCoin: 'BTC',
        currentCours: "142 543.1",
        change: '-1.22%'
    },
   
]
export default function () {

    return (
        <section class="exchangerates effect_lines pageTable">
            <div class="wrapper">
                <h1 class="general_title">Курсы валют</h1>
                <table class="exchangerates_table" cellspacing="0" cellpadding="10" align="center">
                    <thead class="exchangerates_table_head">
                        <tr class="exchangerates_table_row">
                            <th></th>
                            <th class="exchangerates_table_index">#</th>
                            <th class="exchangerates_table_name">Название</th>
                            <th class="exchangerates_table_price">Цена (USDT)</th>
                            <th class="exchangerates_table_change">Изм.(24ч)</th>
                        </tr>
                    </thead>
                    <tbody class="exchangerates_table_body">
                        {
                            Static.records1?.map((item, index) => {
                                console.log("item", item);
                                
                                return (
                                    <tr class="exchangerates_table_row">
                                        <td class="exchangerates_favorites">
                                            <img src={star} alt="Избранные курсы" class="listExchange_icon" />
                                        </td>
                                        <td class="exchangerates_table_index">{index + 1}</td>
                                        <td class="exchangerates_table_name">
                                            <div class="coins_wrap mr_10">
                                                <img src={`/assets/svg/coins/${item.nameCoin}.svg`}></img>
                                            </div>
                                            <span>{item.nameCoin}</span>
                                            {/* <div class="exchangerates_cellwrap">
                        <div class="exchangerates_currency">
                          <img src={`/assets/svg/exchangeRates/${item.nameCoin}.svg`} />
                          <span>{item.nameCoin}</span>

                        </div>
                      </div> */}
                                        </td>
                                        <td>
                                            <div class="exchangerates_cellwrap">
                                                <span class="exchangerates_price">
                                                    {item.currentCours}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="exchangerates_cellwrap">
                                                <span
                                                    class={[
                                                        "exchangerates_percent",
                                                        item.change >= 0
                                                            ? "green"
                                                            : "red"
                                                    ]}
                                                >
                                                    {item.change >= 0 ? '+' : null}
                                                    {/* {item.change.toFixed(2)}% */}
                                                    {item.change}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* <img src={lineB} class="listExchange_lineB"></img> */}
        </section>
    )
}