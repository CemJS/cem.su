import { Cemjsx, Fn, Static, front } from "cemjs-all"


export default function () {

    return (
        <div class='users__select'>
            <div class="users__lang" style="padding: 0 10px"
                onclick={() => Fn.initOne("modalLanguage", {
                    filterLang: Static.lang,
                    callback: async (filterLangFromModal: "") => {
                        let data: any = filterLangFromModal
                        Static.lang = data
                        front.func.updateFilter()

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
                onclick={() => Fn.initOne("modalCountry", {
                    selectCountry: Static.country,
                    callback: async (selectCountryFromModal: "") => {
                        let data: any = selectCountryFromModal
                        Static.country = data
                        front.func.updateFilter()

                        if (!selectCountryFromModal.length) {
                            return;
                        }
                    }

                })}>
                <input
                    type="text"
                    readonly="true"
                    value={Static.country ? Static.country.orig_name : "Страна"} />
            </div>
        </div>
    )
}