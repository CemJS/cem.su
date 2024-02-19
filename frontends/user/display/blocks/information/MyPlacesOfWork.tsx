import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    // Fn.log('=2fc7ab=',Static.aboutMe)
    return (
        <div class="user__info-section-row_type-3">
            <div class="user__info-section">
                <div class="user__info-section_inner work__block">
                    <p>Мои места работы</p>
                    <div style="work-and-education"></div>
                    {Static.record?.work?.map((item: any, key: number) => {
                        return (
                            <div class="work-and-education__block">
                                <span>{item?.title}</span>
                                <span>{item?.period}</span>
                                <span>{item?.description}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}