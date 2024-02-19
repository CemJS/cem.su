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
                                    <div class="feed-card__avatar__icon">
                                        <img class="c-avataricon__photo"
                                            src={Static.record?.avatar?.name ?
                                                `/assets/upload/avatar/${Static.record?.avatar?.name}`
                                                :
                                                avatarDefault
                                            } />
                                        <img class="c-avataricon__frame"
                                            src={Static.record?.frame?.name ?
                                                `/contents/images/lenta/${Static.record?.frame?.name}`
                                                :
                                                defaultGray} />
                                        <div>
                                            <div class="c-avataricon__level user_avatar_level">
                                                <img src={leveGray} />
                                                <span>{Static.record?.statistics?.level}</span>
                                            </div>
                                            <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div>
                                            <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                                        </div>
                                    </div>
                                    <div class="feed-card__avatar__name-user">
                                        <span>{Static.record?.nickname}</span>
                                    </div>
                                </a>
                                <div class="questions-table__optional">
                                    <div class="questions-table__optional__icon">
                                        <img src={dots} />
                                    </div>
                                </div>
                            </div>
                            <div class='feed-card__item__body'>
                                <div class="feed-card__item__body__image-container">
                                    <img src="https://crypto-emergency.com/assets/upload/posts/7fdb6ae00dfc221ff4366386eef4d132.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}