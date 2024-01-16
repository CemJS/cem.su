import { Cemjsx, Fn } from "cemjs-all"
import logo from '@svg/logo.svg'
import lang from '@svg/icons/language.svg'
import menu from '@json/menu'

const RenderMenu = function ({ menu }) {
    return (
        <ul class="header-list">
            {
                menu.map(item => {
                    return (
                        <li class="header-list__item"
                            onclick={async () => {
                                Fn.linkChange(`${item.url}`, { item: 5, test: 7, t: "hhh" })
                            }}>
                            {item.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default function () {
    return (
        <div class="wrapper">
            <div class="header-inner">
                <nav class="header-nav">
                    <a href="/" onclick={Fn.link} class="header-logo">
                        <img src={logo} alt="Crypto Emergency" />
                    </a>
                    <RenderMenu menu={menu} />
                </nav>

                <div class="header__auth">
                    <div
                        class="header__lang"
                        onclick={() => Fn.initOne("modalLanguage", { title: "Выбор основного языка" })}
                    >
                        <span>Русский</span>
                        <span class="i icon-i-lang"></span>
                        {/* <img src={lang} alt="Выбор основного языка на платформе" /> */}
                    </div>

                    <button class="btn" onclick={() => Fn.initOne("modalTools", {})}>Регистрация</button>
                </div>

            </div>
        </div>
    )
}