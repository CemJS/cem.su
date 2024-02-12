import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import MyPlacesOfWork from "./MyPlacesOfWork"

export default function () {
    // Fn.log('=2fc7ab=',Static.aboutMe)
    return (
        <div class="user__info-ection-1 user__info-section-row_type-2">
            <div class="user__info-section-row_type-3">
                <div class="user__info-section">
                    <div class="user__info-section_inner">
                        <p>Мои интересы</p>
                        {Static.record?.interests?.map((item: any, key: number) => {
                            return (
                                <div key={key} style="position: relative;">
                                    <b>{item?.title}</b>
                                    <div>
                                        <span>
                                            {item?.description}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <MyPlacesOfWork />
        </div >
    )
}