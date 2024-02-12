import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    // Fn.log('=2fc7ab=',Static.aboutMe)
    return (
        <div class="user__info__section-1 user__info__section-row_type-2">
        <div class="user__info__section-row_type-3">
            <div class="user__info__section">
                <div class="user__info__section_inner">
                    <p>Обо мне</p>
                    <div class="user__info-grid-1">
                        <div class="user__info_short">
                            <span>Имя</span>
                            <div>
                                <input readonly="true" value="Белов Дмитрий" />
                            </div>
                        </div>
                        <div class="user__info_short">
                            <span>Специализация</span>
                            <div>
                                <input readonly="true" value="Crypto Emergency" />
                            </div>
                        </div>
                        <div class="user__info_short">
                            <span>Страна</span>
                            <div>
                                <input readonly="true" value="Russia" />
                            </div>
                        </div>
                        <div class="user__info_short">
                            <span>Город</span>
                            <div>
                                <input readonly="true" value="Novorossisk" />
                            </div>
                        </div>
                        <div class="user__info_short">
                            <span>Зарегистрирован</span>
                            <div>
                                <input readonly="true" value="28.06.2022" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}