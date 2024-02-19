import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import defaultGray from "@svg/lenta/defaultGray.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import dots from "@svg/questions/dots.svg"

export default function () {

    return (
        <div class="block-one">
            <div class="subscribers__header">
                <h2 style="font-size: 30px; font-weight: 500;">
                    Социальные сети</h2>
            </div>
            <div class="user-socials__list">
                {Static.record?.socials?.map((item: any, key: number) => {
                    return (
                        <a class={`${item?.channel} user-socials__card`}
                            onclick={Fn.link}
                            href={item?.url}>
                            <div class="user-socials__card__inner">
                                <div class={`user-socials__card__type ${item?.channel}`}>
                                    {item?.channel === "youtube" ? <img src={`/contents/svg/youTubeIcon.svg`} /> :
                                        <img src={`/contents/svg/telegramIcon.svg`} />}

                                </div>
                                <div class="user-socials__card__text">
                                    <p class='user-socials__card__name'>{item?.name}</p>
                                    <p class="user-socials__card__description">{item?.description}</p>
                                </div>
                                <div class="questions-table__optional">
                                    <div class="questions-table__optional__icon">
                                        <img src={dots} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}

            </div>
        </div>
    )
}