import { Cemjsx, Static } from "cemjs-all"
import star from '@svg/icon/star.svg'

export default function () {

    return (
        <section class="exchangerates effect_lines pageTable">
            <div>
                <h1 class="general-title">Курсы валют</h1>
                <table class="exchangerates-table" cellspacing="0" cellpadding="10" align="center">
                    <thead class="exchangerates-table__head blockMini">
                        <tr class="exchangerates-table__row">
                            <th class="blockMini"></th>
                            <th class="exchangerates-table__index blockMini">#</th>
                            <th class="exchangerates-table__name">Название</th>
                            <th class="exchangerates-table__price">Цена (USDT)</th>
                            <th class="exchangerates-table__change">Изм.(24ч)</th>
                        </tr>
                    </thead>
                    <tbody class="exchangerates-table__body">
                        {
                            Static.records?.map((item: any, index: number) => {
                                return (
                                    <tr class="exchangerates-table__row">
                                        <td class="exchangerates_favorites blockMini">
                                            <img src={star} alt="Избранные курсы" class="listExchange_icon" />
                                        </td>
                                        <td class="exchangerates-table__index blockMini">{index + 1}</td>
                                        <td class="exchangerates-table__name">
                                            <div class="coins_wrap mr_10">
                                                <img src={`/contents/coins/${item.coin}.svg`}></img>
                                            </div>
                                            <span>{item.coin}</span>
                                        </td>
                                        <td>
                                            <div class="exchangerates_cellwrap">
                                                <span class="exchangerates_price">
                                                    {item?.price.toLocaleString('en-US').replace(/,/g, ' ')}
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
                                                    ]}>
                                                    {item.change >= 0 ? '+' : null}
                                                    {item.change.toFixed(2)}
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