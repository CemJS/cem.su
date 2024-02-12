import { Cemjsx, Fn, Static, front } from "cemjs-all"
import resetFilters from "@svg/users/reset_filter.svg"

export default function () {

    return (

        <div class="users__checkbox">
            <div class="checkbox">
                <input
                    type="checkbox"
                    id="basic"
                    ref="basic"
                    value={Static.checkBox?.basic}
                    checked={Static.checkBox?.basic}
                    onclick={(e: any) => {
                        Static.checkBox.basic = !Static.checkBox?.basic
                        front.func.updateFilter()
                    }} />
                <label class="checkbox__label" for="basic">Пользователи</label>
            </div>

            <div class="checkbox">
                <input
                    type="checkbox"
                    id="creator"
                    ref="creator"
                    value={Static.checkBox?.creator}
                    checked={Static.checkBox?.creator}
                    onclick={(e: any) => {
                        Static.checkBox.creator = !Static.checkBox?.creator
                        front.func.updateFilter()
                    }} />
                <label class="checkbox__label" for="creator">Создатели контента</label>
            </div>

            <div class="checkbox">
                <input
                    type="checkbox"
                    id="expert"
                    ref="expert"
                    value={Static.checkBox?.expert}
                    checked={Static.checkBox?.expert}
                    onclick={(e: any) => {
                        Static.checkBox.expert = !Static.checkBox?.expert
                        front.func.updateFilter()
                    }} />
                <label class="checkbox__label" for="expert">Эксперты</label>
            </div>
            <button class="users__reset_filters"
                onclick={() => {
                    Static.search = ""
                    if (Static.lang?.code?.length || Static.lang?.orig_name) {
                        Static.lang.code = "ru"
                        Static.lang.orig_name = "Русский"
                    }
                    if (Static.country?.code?.length || Static.country?.orig_name) {
                        Static.country.code = "ru"
                        Static.country.orig_name = "Россия"
                    }
                    front.func.updateFilter()
                }}>
                <img src={resetFilters} width="30" height="30" />
            </button>
        </div>
    )
}