import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import AnswerCreateDate from "./AnswerCreateDate";
import defaultGray from "@svg/lenta/defaultGray.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import dots from "@svg/questions/dots.svg"

export default function () {

    return (
        <div class="block-one c-container">
            <h2>Предложенные ответы</h2>
            <div class="questions-table__labels">
                <span>Вопрос</span>
                <span>Комментариев</span>
                <span>Рейтинг</span>
                <span>Ответ</span>
            </div>
            <div class="questions-table">
                {Static.record?.answers?.map((item: any, key: number) => {
                    // Fn.log("item", item?.author);
                    return (
                        <div key={key} class="questions-table__item">
                            <div class="questions-table__main">
                                <div style="display: flex">
                                    <a href={`/user/${item?.id}`} class='comment_avatar' style="padding-left: 0;">
                                        <div class="c-avataricon icon-user-answer">
                                            <img class="c-avataricon__photo"
                                                src={item.author?.avatar?.name ?
                                                    `/assets/upload/avatar/${item?.author?.avatar?.name}`
                                                    :
                                                    avatarDefault
                                                } />
                                            <img class="c-avataricon__frame"
                                                src={item.author?.frame?.name ?
                                                    `/contents/images/lenta/${item.author?.frame?.name}`
                                                    :
                                                    defaultGray} />
                                            <div>
                                                <div class="c-avataricon__level user_avatar_level">
                                                    <img src={leveGray} />
                                                    <span>{item.author?.statistics?.level}</span>
                                                </div>
                                                <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div>
                                                <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                                            </div>
                                        </div>
                                    </a>
                                    <div>
                                        <a>
                                            <div class="questions-table__title">
                                                {item?.questionText}
                                            </div>
                                        </a>
                                        <div>
                                            <div class="questions-table__created">
                                                <AnswerCreateDate item={item} key={key} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="questions-table__counter">
                                <span class="questions-table__counter questions-table__counter_desc">Комментариев</span>
                                <span class="questions-table__counter questions-table__counter_number">{item?.commentsCount}</span>
                            </div>
                            <div class="questions-table__counter">
                                <span class="questions-table__counter questions-table__counter_desc">Рейтинг</span>
                                <span class="questions-table__counter questions-table__counter_number">{item?.rating}</span>
                            </div>
                            <div class="questions-table__avatar">
                                <div class="answer-text">
                                    <p html={item?.answerText}></p>
                                </div>
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