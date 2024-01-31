import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import folder from "@svg/about/goal_1.svg"
import safe from "@svg/about/goal_2.svg"
import access from "@svg/about/goal_3.svg"
import pin from "@svg/about/goal_4.svg"

const goals = [
    {
        img: folder,
        title: "Поднять крипто грамотность населения",
        description: "Мы создали платформу, где любой желающий может найти ответ на свой вопрос, и обрести навыки инвестирования в криптовалюту.",
        classItem: "crypto",
    },
    {
        img: safe,
        title: "Объединить людей",
        description: "Создать мульти интернациональное комьюнити по всему миру.",
        classItem: "unite",
    },
    {
        img: access,
        title: "Бесплатный доступ",
        description: "Весь функционал на сайте не потребует от вас никаких вложений!",
        classItem: "access",
    },
    {
        img: pin,
        title: "Создание метавселенной",
        description: "Объединение всех продуктов компании в одной метавселенной.",
        classItem: "meta",
    },
]


export default function () {
    return (
        <div>
            <h2 class="about_subtitle">Наши цели</h2>
            <div class="goal_list">
                {
                    goals.map((item) => {
                        return (
                            <div class={["goal_item", item.classItem]}>
                                <div class="goal_img">
                                    <img src={item.img} ></img>
                                </div>
                                <div class="goal_content">
                                    <h4>{item.title}</h4>
                                    <div class="goal_content__desc">{item.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
