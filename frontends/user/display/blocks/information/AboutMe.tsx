import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"


function formatDate(dateString: any) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return day + "." + month + "." + year
}

export default function () {
    // Fn.log('=2fc7ab=',Static.aboutMe)
    return (
        <div class="user__info-section-1 user__info-section-row_type-2">
            <div class="user__info__section-row_type-3">
                <div class="user__info-section">
                    <div class="user__info-section_inner">
                        <p>Обо мне</p>
                        <div class="user__info-grid-1">
                            <div class="user__info-short">
                                <span>Имя</span>
                                <div>
                                    <input readonly="true" value={Static.record?.fullName ? Static.record?.fullName : ""} />
                                </div>
                            </div>
                            <div class="user__info-short">
                                <span>Специализация</span>
                                <div>
                                    <input readonly="true" value={Static.record?.information?.speciality ? Static.record?.information?.speciality : ""} />
                                </div>
                            </div>
                            <div class="user__info-short">
                                <span>Страна</span>
                                <div>
                                    <input readonly="true" value={Static.record?.country?.engName ? Static.record?.country?.engName : ""} />
                                </div>
                            </div>
                            <div class="user__info-short">
                                <span>Город</span>
                                <div>
                                    <input readonly="true" value={Static.record?.information?.city ? Static.record?.information?.city : ""} />
                                </div>
                            </div>
                            <div class="user__info-short">
                                <span>Зарегистрирован</span>
                                <div>
                                    <input readonly="true" value={Static.record?.information?.dateCreate ? formatDate(Static.record?.information?.dateCreate) : ""} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}