import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import defaultGray from "@svg/lenta/defaultGray.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import dots from "@svg/questions/dots.svg"

export default function () {

    return (
        <div class="block-one">
            <div class="subscribers__header">
                <h2>Подписчики</h2>
            </div>
            <div class="subscribers__main-block">
                {Static.record?.subscribers?.map((item: any, key: number) => {
                    // Fn.log('=9aa675=', item)
                    return (
                        <div class='card-user'>
                            <a href={`/user/${item?.id}`} class='comment_avatar' style="padding-left: 0;">
                                <div class="c-avataricon icon-user-answer">
                                    <img class="c-avataricon__photo"
                                        src={item?.avatar?.name ?
                                            `/assets/upload/avatar/${item?.avatar?.name}`
                                            :
                                            avatarDefault
                                        } />
                                    <img class="c-avataricon__frame"
                                        src={item?.frame?.name ?
                                            `/contents/images/lenta/${item?.frame?.name}`
                                            :
                                            defaultGray} />
                                    <div>
                                        <div class="c-avataricon__level user_avatar_level">
                                            <img src={leveGray} />
                                            <span>{item?.statistics?.level}</span>
                                        </div>
                                        <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div>
                                        <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                                    </div>
                                </div>
                            </a>
                            <div class="card-user__info">
                            <p>{item?.nickname}</p>
                            <p>{item?.fullName}</p>
                            </div>
                            <div class="questions-table__optional">
                                <div class="questions-table__optional__icon">
                                    <img src={dots} />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}