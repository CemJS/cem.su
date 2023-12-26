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
                        <li class="header-list__item">
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
                    <div class="header__lang">
                        <span>Русский</span>
                        <img src={lang} alt="Выбор основного языка на платформе" />
                    </div>
                </div>

            </div>
        </div>
    )
}