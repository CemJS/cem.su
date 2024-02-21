import { Cemjsx, Static } from "cemjs-all"

Static.listBlockState = true
let listBtnState: boolean = true

export default function () {

    return (
        <div class="profile-main__settings__list-block">
            <div class="profile-main__settings__list">
                <div
                    onclick={() => { Static.listBlockState = !Static.listBlockState }}
                    class={Static.listBlockState ? `profile-main__settings__list__item
                           profile-main__settings__list__item_active` : "profile-main__settings__list__item"} >
                    <p class="profile-main__settings__list__title">
                        Социальная сеть
                    </p>
                    <div class="profile-main__settings__list__subcategory
                                profile-main__settings__list__subcategory--active">
                        <p>Безопасность</p>
                    </div>
                    <div class="profile-main__settings__list__subcategory">
                        <p>Черный список</p>
                    </div>
                    <div class="profile-main__settings__gradient-line"></div>
                </div>
            </div>
        </div >
    )
}