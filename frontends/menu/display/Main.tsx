import { Cemjsx, Fn, front } from "cemjs-all"
import cem from "@svg/cem.svg"
import menuBottom from '@json/menuBottom'


export default function () {
    return (
        <div class="wrapper">
            <ul class="menu-inner">
                <li>
                    <a
                        class="menu__item"
                        onclick={() => { Fn.linkChange("/") }}
                    >
                        <img src={cem} alt="Главная страница" />
                        <span class="menu__item-name">Главная</span>
                    </a>
                </li>
                <li>
                    <a class="menu__item" onclick={() => { Fn.linkChange("/lenta") }}>
                        <i class={["i", `i-lenta`]}></i>
                        <span class="menu__item-name">Лента</span>
                    </a>
                </li>
                <li>
                    <a class="menu__item" onclick={() => { Fn.linkChange("/messanger") }}>
                        <i class={["i", `i-messanger`]}></i>
                        <span class="menu__item-name">Сообщения</span>
                    </a>
                </li>
                <li>
                    <a
                        class="menu__item"
                        onclick={(e) => {
                            if (!front.Variable.Auth) {
                                e.preventDefault()
                                Fn.initOne("modalAuthtorization", {})
                            }

                            Fn.initOne("modalTools", {
                                records: [
                                    {
                                        name: "Опубликовать пост"
                                    },
                                    {
                                        name: "Задать вопрос"
                                    }
                                ]
                            })
                        }}
                    >
                        <i class={["i", `i-add`]}></i>
                        <span class="menu__item-name">Опубликовать</span>
                    </a>
                </li>
                <li>
                    <a class="menu__item" onclick={() => { Fn.linkChange("/questions") }}>
                        <i class={["i", `i-qa`]}></i>
                        <span class="menu__item-name">Вопросы и ответы</span>
                    </a>
                </li>
                <li class="menu__item" onclick={() => { Fn.initOne("modalAuthtorization", {}) }}>
                    <i class={["i", `i-notice-empty`]}></i>
                    <span class="menu__item-name">Уведомления</span>
                </li>
                <li class="menu__item" onclick={() => Fn.initOne("sidebar", {})}>
                    <i class="i i-burger"></i>
                    <span class="menu__item-name">Меню</span>
                </li>
            </ul>
        </div>
    )
}