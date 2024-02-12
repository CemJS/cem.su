import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import MyPlacesOfWork from "./MyPlacesOfWork"

export default function () {
    // Fn.log('=2fc7ab=',Static.aboutMe)
    return (
        <div class="user__info__section-1 user__info__section-row_type-2">
            <div class="user__info__section-row_type-3">
                <div class="user__info__section">
                    <div class="user__info__section_inner">
                        <p>Мои интересы</p>
                        <div style="position: relative;">
                            <b>Игры</b>
                            <div>
                                <span>
                                    Люблю серию игр Souls, и онлайн шутеры. Сейчас открыл для себя консоль Nintendo Switch, будем тестировать
                                </span>
                            </div>
                        </div>
                        <div style="position: relative;">
                            <b>Кино</b>
                            <div>
                                <span>
                                    Нравятся такие серии фильмов как: Star Wars, Властелин колец, Star Trek, Marvel. Про культовые фильмы так же не стоит забывать: Зеленая миля, Побег из Шоушенка, Один дома, Криминальное чтиво, Интерстеллар, Матрица.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyPlacesOfWork />
        </div>
    )
}