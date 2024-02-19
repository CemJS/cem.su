import { Cemjsx, front } from "cemjs-all"


let tmp = [
    {
        "_id": "1111",
        "info": {
            "browser": "Chrome",
            "version": "97.0.4692.99",
            "platform": "Microsoft Windows",
            "os": "Windows 10.0",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
    },
    {
        "_id": "1111",
        "info": {
            "browser": "Chrome",
            "version": "97.0.4692.99",
            "platform": "Microsoft Windows",
            "os": "Windows 10.0",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
    },
    {
        "_id": "1111",
        "info": {
            "browser": "Chrome",
            "version": "97.0.4692.99",
            "platform": "Microsoft Windows",
            "os": "Windows 10.0",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
    },
]

const Render_Sessions = function ({ items }) {
    return (
        <table class="listExchange__table table">
            <thead class="listExchange__table-head">
                <tr class="listExchange__table-row">
                    <th class="listExchange__table-name disable-tableName" style="justify-content: start;">Браузер</th>
                    <th class="listExchange__table-coins disable-tableName">Платформа</th>
                    <th class="listExchange__table-coins disable-tableName">Действия</th>
                </tr>
            </thead>
            <tbody class="table_body listExchange__table-body">
                {
                    items.map((item: any, index: any) => {
                        return (
                            <div>
                                <tr class="table_row listExchange__table-row">
                                    <td class="listExchange__table-name" style="justify-content: start;">{item?.info?.browser}</td>
                                    <td class="listExchange__table-coins">{item?.info?.platform}</td>
                                    <td class="listExchange__table-btn">
                                        <div class="btn_border-wrap mY-auto h100">
                                            <button class="btn_border bgMW"
                                                onclick={async () => {
                                                    let answer = await front.Services.functions.sendApi(`/api/MyInfo`, {
                                                        action: "delete",
                                                        _id: item?._id
                                                    })

                                                    if (answer.error) {
                                                        alert(answer.error)
                                                        return
                                                    }
                                                }}>
                                                Удалить
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <div class="body-card">
                                    <div class="bodyCard__container">
                                        <div class="bodyCard__container__main-block" style="flex-direction: column">
                                            <div class="bodyCard__container_font-size pt-10">{item?.info?.browser}</div>
                                            <div class="bodyCard__container_font-size pt-20 coins_wrap">{item?.info?.platform}</div>
                                        </div>
                                        <div class="bodyCard__container__btn-block w100 pt-10 pb-10">
                                            <div class="btn_border-wrap bodyCard__container_btn_size mY-auto h100">
                                                <button class="btn_border bgMW"
                                                    onclick={async () => {
                                                        let answer = await front.Services.functions.sendApi(`/api/MyInfo`, {
                                                            action: "delete",
                                                            _id: item?._id
                                                        })

                                                        if (answer.error) {
                                                            alert(answer.error)
                                                            return
                                                        }
                                                    }}>
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