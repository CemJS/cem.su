import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import QuestionCreate from "./QuestionCreate";

export default function () {

    return (
        <div class="block-one c-container">
            <h2>Заданные вопросы</h2>
            <div class="questions-table__labels">
                <span>Вопрос</span>
                <span>Ответов</span>
                <span>Просмотров</span>
                <span>Лучший ответ</span>
            </div>
            <div class="questions-table">
                {Static.record?.questions?.map((item: any, key: number) => {
                    // console.log("item", item);
                    return (
                        <div key={key} class="questions-table__item">
                            <div class="questions-table__main">
                                <a href={`/question/show/${item?.id}`} onclick={() => { Fn.link }}>
                                    <div class="questions-table__title">{item?.title}</div>
                                </a>
                                <div>
                                    <div class="questions-table__created">
                                        <QuestionCreate item={item} key={key} />
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
                                        src={`/assets/upload/avatar/${Static.record?.avatar?.name}`} />
                                        <img class="c-avataricon__frame"
                                        src={`/contents/images/${Static.record?.frame?.name}`}/>
                                    </div>
                                </a>
                                <div class="questions-table__user-name">
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}