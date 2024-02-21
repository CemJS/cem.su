import { Cemjsx, Static, Fn } from "cemjs-all"

let listBtnState: boolean = true

export default function () {

    return (
        <div>
            <div class="settings__list">
                <div class={["settings__list_container",
                    Static.burger
                        ?
                        "settings__list_active"
                        :
                        null]}>
                    <p class="settings__list_title"
                        onclick={() => {
                            Static.burger = !Static.burger
                        }}>Социальная сеть</p>
                    <div class={["settings__list_subcategory",
                        Static.category == "security"
                            ?
                            "settings__list_subcategory_active"
                            :
                            null
                    ]}
                        onclick={() => {
                            Static.category = "security"
                        }}>
                        <a href="/profile/settings/security" onclick={Fn.link}>Безопасность</a>
                    </div>
                    <div class={["settings__list_subcategory",
                        Static.category == "blackList"
                            ?
                            "settings__list_subcategory_active"
                            :
                            null
                    ]}
                        onclick={() => {
                            Static.category = "blackList"
                        }}>
                        <a href="/profile/settings/sessions" onclick={Fn.link}>Сессии</a>
                    </div>
                    <div class="settings__list_line" />
                </div>
            </div>
        </div>
    )
}