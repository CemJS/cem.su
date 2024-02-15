import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import AwardCreateDate from "./AwardCreateDate"

export default function () {
    return (
        <div class="block-one c-container">
            <h2>Полученные награды</h2>
            <div class="user-awards__main-block">
                <div class="user-awards__body">
                    {Static.record?.awards?.map((item: any, key: number) => {
                        return (
                            <div key={key} class="user-awards">
                                <img src={`/contents/svg/personalAwards/${item?.icon}`} class='user-awards__small-badge' />
                                <img src={`/contents/svg/personalAwards/${item?.icon}`} class='user-awards__badge' />
                                <div class="user-awards__description">
                                    <p class="user-awards__title">{item?.name}</p>
                                    <p class="user-awards__text">{item?.description}</p>
                                    <p class="user-awards__progress-bar-label">Получено</p>
                                   <AwardCreateDate item={item} key={key}/>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}