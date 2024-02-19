import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import defaultGray from "@svg/lenta/defaultGray.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import dots from "@svg/questions/dots.svg"

export default function () {
    // Fn.log("wtf?", Static.record);
    return (
        <div style="width: 100%;">
            {Static.record?.feed?.map((item: any, key: number) => {
                // Fn.log('=b56954=', item)
                return (
                    <div key={key} class="feed-card__item">
                        <div class="card-position">
                            <div class="feed-card__item__header">
                                <a href={`/user/${item?.id}`} class='feed-card__avatar' style="padding-left: 0;">
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
                                    <div class="card-user__info">
                                        <p>{Static.record?.nickname}</p>
                                    </div>
                                </a>
                                <div class="questions-table__optional">
                                    <div class="questions-table__optional__icon">
                                        <img src={dots} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}