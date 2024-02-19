import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import QuestionCreateDate from "./QuestionCreateDate";
import defaultGray from "@svg/lenta/defaultGray.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import closed_question from "@svg/questions/closed_question.svg"
import best_answer from "@svg/questions/best_answer.svg"
import open_question from "@svg/questions/open_question.svg"
import question_status_delete from "@svg/questions/question_status_delete.svg"
import dots from "@svg/questions/dots.svg"

export default function () {
// Fn.log('=880ada=',Static.record)
    return (
        <div class="block-one">
            <h2>Заданные вопросы</h2>
            <div class="questions-table__labels">
                <span>Вопрос</span>
                <span>Ответов</span>
                <span>Просмотров</span>
                <span>Лучший ответ</span>
            </div>
            <div class="questions-table">
                {Static.record?.questions?.map((item: any, key: number) => {
                    Fn.log("item", item?.nickname?.length);
                    return (
                        <div key={key} class="questions-table__item">
                            <div class="questions-table__main">
                                <a href={`/question/show/${item?.id}`} onclick={() => { Fn.link }}>
                                    <div class="questions-table__title">{item?.title}</div>
                                </a>
                                <div>
                                    <div class="questions-table__created">
                                        <QuestionCreateDate item={item} key={key} />
                                    </div>
                                </div>
                            </div>
                            <div class="questions-table__counter">
                                <span class="questions-table__counter questions-table__counter_desc">Ответов</span>
                                <span class="questions-table__counter questions-table__counter_number">{item?.statistics?.answersCount}</span>
                            </div>
                            <div class="questions-table__counter">
                                <span class="questions-table__counter questions-table__counter_desc">Просмотров</span>
                                <span class="questions-table__counter questions-table__counter_number">{item?.statistics?.viewsCount}</span>
                            </div>
                            <div class="questions-table__avatar">
                                <a href={`/user/${item?.id}`} class='comment_avatar'>
                                    <div class="c-avataricon c-avataricon--micro ">
                                        <img class="c-avataricon__photo"
                                            src={item.bestAnswerAuthor?.avatar?.name ?
                                                `/assets/upload/avatar/${item?.bestAnswerAuthor?.avatar?.name}`
                                                :
                                                avatarDefault
                                            } />
                                        <img class="c-avataricon__frame"
                                            src={item.bestAnswerAuthor?.frame?.name ?
                                                `/contents/images/lenta/${item.bestAnswerAuthor?.frame?.name}`
                                                :
                                                defaultGray} />
                                        <div>
                                            <div class="c-avataricon__level user_avatar_level">
                                                <img src={leveGray} />
                                                <span>{item.bestAnswerAuthor?.statistics?.level}</span>
                                            </div>
                                            <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div>
                                            <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                                        </div>
                                    </div>
                                </a>
                                <div class="questions-table__user-name">
                                    <p>{item?.bestAnswerAuthor?.nickname}</p>
                                    <p></p>
                                </div>
                            </div>
                            <div class="questions-table__status">
                                <div class="questions-table__status questions-table__status_inner">
                                    <img src={item?.del ? question_status_delete
                                        :
                                        (item?.isClosed ?
                                            (item?.bestAnswerAuthor?.nickname?.length ? best_answer : closed_question)
                                            :
                                            open_question)} />
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