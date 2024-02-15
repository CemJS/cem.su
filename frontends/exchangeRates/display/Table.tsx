import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function () {
    return (
        <table class="exchange-rates__table table">
            <thead class="exchange-rates__table__head">
                <tr class="exchange-rates__table__row disable-tableName">
                    <th >#</th>
                    <th class="cell--just-start">Название</th>
                    <th >Цена (USDT)</th>
                    <th >Изм.(24ч)</th>
                </tr>
            </thead>
            <tbody class="table_body exchange-rates__table__body table_test">
                {
                    Static.records?.map((item: any, index: number) => {
                        return (
                            <tr class="table_row exchange-rates__table__row">
                                <td class="cell--just-center disable-tableName">{index + 1}</td>

                                <td class="cell--just-start">
                                    <div class="coins_wrap mr-10 cell--just-center">
                                        <img src={`/contents/coins/${item?.coin}.svg`}></img>
                                    </div>
                                    <span>{item?.coin.toUpperCase()}</span>
                                </td>

                                <td class="cell--just-center">
                                    <div>
                                        <span>
                                            {item?.price.toLocaleString('en-US').replace(/,/g, ' ')}
                                        </span>
                                    </div>
                                </td>

                                <td class="cell--just-center">
                                    <div>
                                        <span
                                            class={`exchange-rates_percent ${item?.change >= 0 ? 'exchange-rates_percent--rise' : 'exchange-rates_percent--recession'}`}>
                                            {item?.change >= 0 ? '+' : null}
                                            {item?.change.toFixed(2)}{" " + "%"}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}