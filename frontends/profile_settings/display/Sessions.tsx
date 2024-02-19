import { Cemjsx } from "cemjs-all"


let tmp = [
    { name: "fdf" },
    { name: "fdf2" },
    { name: "fdf3" },
]

const Render_Sessions = function ({ items }) {
    return (
        <table class="listExchange__table table">
            <thead class="listExchange__table-head">
                <tr class="listExchange__table-row">
                    <th class="listExchange__table-name disable-tableName" style="justify-content: start;">Название</th>
                    <th class="listExchange__table-coins disable-tableName">Коины</th>
                    <th class="listExchange__table-coins disable-tableName">Действия</th>
                </tr>
            </thead>
            <tbody class="table_body listExchange__table-body">
                {
                    items.map((item: any, index: any) => {
                        return (
                            <div>
                                <tr class="table_row listExchange__table-row">
                                    <td class="listExchange__table-name" style="justify-content: start;">{item?.name}</td>
                                    <td class="listExchange__table-coins">
                                    </td>
                                    <td class="listExchange__table-btn">
                                        <div class="btn_border-wrap mY-auto h100">
                                            <button class="btn_border bgMW">
                                                Удалить
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <div class="body-card">
                                    <div class="bodyCard__container">
                                        <div class="bodyCard__container__main-block" style="flex-direction: column">
                                            <div class="bodyCard__container_font-size pt-10">{item?.name}</div>
                                            <div class="bodyCard__container_font-size pt-20 coins_wrap">

                                            </div>
                                        </div>
                                        <div class="bodyCard__container__btn-block w100 pt-10 pb-10">
                                            <div class="btn_border-wrap bodyCard__container_btn_size mY-auto h100">
                                                <button class="btn_border bgMW">
                                                    Удалить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default function () {
    return (
        <section class="listExchange effect_lines">
            <h1 class="general__title">Список активных сессий</h1>
            <div class="listExchange_table_wrapper">
                <Render_Sessions items={tmp} />
            </div>
        </section>
    )
}