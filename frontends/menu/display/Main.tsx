import { Cemjsx, Fn } from "cemjs-all"
import cem from "@svg/cem.svg"
import menuBottom from '@json/menuBottom'


export default function () {
    return (
        <div class="wrapper">
            <ul class="menu-inner">
                <li>
                    <a href="/" class="menu__item">
                        <img src={cem} alt="Главная страница" />
                        <span class="menu__item-name">Главная</span>
                    </a>
                </li>
                {
                    menuBottom.map(item => {
                        return (
                            <li>
                                <a href={item.link} class="menu__item">
                                    <i class={["i", `i-${item.icon}`]}></i>
                                    <span class="menu__item-name">{item.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
                <li class="menu__item" onclick={() => Fn.initOne("sidebar", {})}>
                    <i class="i i-burger"></i>
                    <span class="menu__item-name">Меню</span>
                </li>
            </ul>
        </div>
    )
}