import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

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
                <div class="questions-table__item">
                    <div class="questions-table__main">
                        <a>
                            <div class="user-question-title"></div>
                        </a>
                        <div>
                            <div class="user_answer_created">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}