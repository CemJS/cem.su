import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"
import Card from "./Card";
import filter from '@svg/icon/filter.svg'

export default function () {
    return (
        <table class="listExchange_table table">
            <thead class="listExchange_table_head">
                <tr class="listExchange_table_row">
                    <th class="listExchange_table_name disable-tableName" style="justify-content: start;">Название</th>
                    <th class="listExchange_table_coins disable-tableName">Коины</th>
                    <th class="listExchange_table_filter"
                        onclick={() => Fn.initOne("modalFilterExchange", {
                            filterCoins: Static.filterCoins,
                            callback: async (filterCoinsFromModal: []) => {
                                Static.filterCoins = filterCoinsFromModal
                                // console.log("filterCoins", Static.filterCoins);
                                let res = front.Services.functions.sendApi("/api/events/Exchanges", {
                                    "action": "get",
                                    "coins": Static.filterCoins,
                                    "uuid": `${localStorage?.uuid}`,
                                })
                                if (!filterCoinsFromModal.length) {
                                    return;
                                }
                            }
                        })}>
                        <img src={filter} />
                    </th>
                </tr>
            </thead>
            <tbody class="table_body listExchange_table_body">
                <div class="filterShow" onclick={() => Fn.initOne("modalFilterExchange", {
                    filterCoins: Static.filterCoins,
                    callback: async (filterCoinsFromModal: []) => {
                        Static.filterCoins = filterCoinsFromModal
                        // console.log("filterCoins", Static.filterCoins);
                        let res = front.Services.functions.sendApi("/api/events/Exchanges", {
                            "action": "get",
                            "coins": Static.filterCoins,
                            "uuid": `${localStorage?.uuid}`,
                        })
                        if (!filterCoinsFromModal.length) {
                            return;
                        }
                    }
                })}>
                    <img src={filter} />
                </div>
                {
                    Static.records?.map((item: any, index: any) => {
                        return (
                            <div>
                                <tr
                                    class="table_row listExchange_table_row"
                                    isVisible={() => {
                                        if (index == Static.records?.length - 3) {
                                            // console.log('=индкекс равен =', index, 'Static.records.length - 3', Static.records.length - 3)
                                            Static.moreid = Static.records[Static.records.length - 1]?._id
                                            // fn("addEvent")
                                        }
                                    }}
                                    init={($el: any) => {
                                        if (index == Static.records?.length - 1) {
                                            const observer = new IntersectionObserver((entries) => {
                                                entries.forEach(async entry => {
                                                    if (entry.isIntersecting) {
                                                        observer.unobserve($el)
                                                        let res = front.Services.functions.sendApi("/api/events/Exchanges", {
                                                            "action": "skip",
                                                            "skip": Static.records?.length,
                                                            "uuid": `${localStorage?.uuid}`,
                                                        })
                                                    }
                                                })
                                            })
                                            observer.observe($el)
                                        }
                                    }}>

                                    <td class="listExchange_table_name" style="justify-content: start;">{item?.name}</td>
                                    <td class="listExchange_table_coins">
                                        <div class="coins_wrap">
                                            {
                                                item?.listCoins?.map((el: any, index: number) => {
                                                    return (
                                                        <img src={`/contents/coins/${el?.icon}.svg`} class="coins_wrap_item"></img>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td class="listExchange_table_btn">
                                        <div class="btn_border-wrap mY-auto h100">
                                            <a href={item?.url} onclick={Fn.link}>
                                                <button class="btn_border bgMW">
                                                    Торговать
                                                </button>
                                            </a>
                                        </div>
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