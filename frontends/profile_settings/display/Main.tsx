import { Cemjsx, Static, Fn } from "cemjs-all"

let listBtnState: boolean = true

export default function () {

    return (
        <div>
            <div class="profile-settings__list">
                <div class={["profile-settings__list_container",
                    Static.burger
                        ?
                        "profile-settings__list_active"
                        :
                        null]}>
                    <p class="profile-settings__list_title"
                        onclick={() => {
                            Static.burger = !Static.burger
                        }}>Социальная сеть</p>
                    <div class={["profile-settings__list_subcategory",
                        Static.category == "security"
                            ?
                            "profile-settings__list_subcategory_active"
                            :
                            null
                    ]}
                        onclick={() => {
                            Static.category = "security"
                        }}>
                        <a href="/profile/settings/security" onclick={Fn.link}>Безопасность</a>
                    </div>
                    <div class={["profile-settings__list_subcategory",
                        Static.category == "sessions"
                            ?
                            "profile-settings__list_subcategory_active"
                            :
                            null
                    ]}
                        onclick={() => {
                            Static.category = "sessions"
                        }}>
                        <a href="/profile/settings/sessions" onclick={Fn.link}>Сессии</a>
                    </div>
                    <div class="profile-settings__list_line" />
                </div>
            </div>
        </div>
    )
}