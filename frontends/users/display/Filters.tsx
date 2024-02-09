import { Cemjsx, Fn, Static, front } from "cemjs-all"
import resetFilters from "@svg/users/reset_filter.svg"

function debounce(func: any, delay: number) {
    let timeoutId: any
    return function (...args: any) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        }, delay)
    }
}

let checkBox = {
    basic: true,
    expert: true,
    creator: true
}

let answer: any = []
let valueUsers: any = ""

export default function () {

    return (
        <div class="users__filter">
            <div class="users__search">
                <input
                    type="text"
                    placeholder="Найти друзей"
                    value={valueUsers}
                    oninput={debounce(async (e: any) => {
                        valueUsers = e.target.value.toLocaleLowerCase()
                            answer = await front.Services.functions.sendApi("/api/events/Users", {
                                "action": "get",
                                "uuid": `${localStorage?.uuid}`,
                                "search": valueUsers,
                                "role": checkBox,
                                "lang": Static.lang?.code
                            });
                    }, 400)} />
            </div>

            <div class='users__select'>
                <div class="users__lang" style="padding: 0 10px"
                    onclick={() => Fn.initOne("modalLanguage", {
                        filterLang: Static.lang,
                        callback: async (filterLangFromModal: "") => {
                            Static.lang = filterLangFromModal
                            // console.log("filterLangFromModal", filterLangFromModal);
                            let res = front.Services.functions.sendApi("/api/events/Users", {
                                "action": "get",
                                "lang": Static.lang?.code,
                                "search": valueUsers,
                                "role": checkBox,
                                "uuid": `${localStorage?.uuid}`,
                            })

                            if (!filterLangFromModal.length) {
                                return;
                            }
                        }
                    })}>
                    <input
                        type="text"
                        readonly="true"
                        value={Static.lang?.orig_name ? Static.lang?.orig_name : "Язык"} />
                </div>

                <div class="users__lang" style="padding: 0 10px"
                    onclick={() => Fn.initOne("modalCountry", {})}>
                    <input
                        type="text"
                        readonly="true"
                        value={Static.country ? Static.country : "Страна"} />
                </div>
            </div>

            <div class="users__checkbox">
                <div class="checkbox">
                    <input
                        type="checkbox"
                        id="basic"
                        ref="basic"
                        value={checkBox.basic}
                        checked={checkBox.basic}
                        onclick={(e: any) => {
                            checkBox.basic = !checkBox.basic
                            let res = front.Services.functions.sendApi("/api/events/Users", {
                                "action": "get",
                                "role": checkBox,
                                "lang": Static.lang?.code,
                                "search": valueUsers,
                                "uuid": `${localStorage?.uuid}`,
                            })
                        }} />
                    <label class="checkbox__label" for="basic">Пользователи</label>
                </div>

                <div class="checkbox">
                    <input
                        type="checkbox"
                        id="creator"
                        ref="creator"
                        value={checkBox.creator}
                        checked={checkBox.creator}
                        onclick={(e: any) => {
                            checkBox.creator = !checkBox.creator
                            let res = front.Services.functions.sendApi("/api/events/Users", {
                                "action": "get",
                                "role": checkBox,
                                "lang": Static.lang?.code,
                                "search": valueUsers,
                                "uuid": `${localStorage?.uuid}`,
                            })
                        }} />
                    <label class="checkbox__label" for="creator">Создатели контента</label>
                </div>

                <div class="checkbox">
                    <input
                        type="checkbox"
                        id="expert"
                        ref="expert"
                        value={checkBox.expert}
                        checked={checkBox.expert}
                        onclick={(e: any) => {
                            checkBox.expert = !checkBox.expert
                            let res = front.Services.functions.sendApi("/api/events/Users", {
                                "action": "get",
                                "role": checkBox,
                                "lang": Static.lang?.code,
                                "search": valueUsers,
                                "uuid": `${localStorage?.uuid}`,
                            })
                        }} />
                    <label class="checkbox__label" for="expert">Эксперты</label>
                </div>
                <button class="users__reset_filters"
                    onclick={() => {
                        valueUsers = ""
                        if (Static.lang?.code?.length || Static.lang?.orig_name?.lang) {
                            Static.lang.code = "ru"
                            Static.lang.orig_name = "Русский"
                        }
                        // console.log("filterLangFromModal", filterLangFromModal);
                        let res = front.Services.functions.sendApi("/api/events/Users", {
                            "action": "get",
                            "lang": Static.lang?.code,
                            "uuid": `${localStorage?.uuid}`,
                            "search": valueUsers,
                        })
                    }}>
                    <img src={resetFilters} width="30" height="30" />
                </button>
            </div>

        </div>
    )
}