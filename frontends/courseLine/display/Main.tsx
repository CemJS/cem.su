import { Cemjsx, Fn } from "cemjs-all"
import courses from '@json/course'

export default function () {
    return (
        <div class="course-line" >
            <div class="course-line__track">
                {
                    courses.map(item => {
                        return (
                            <div class="course-line__item">
                                <div class="course-line__item-img">
                                    {/* <img src={`/assets/svg/coins/${item.nameCoin}.svg`} alt={item.nameCoin} /> */}
                                </div>
                                <span class="course-line__item-text">{item.nameCoin}</span>
                                <span>{item.currentCourse}</span>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}