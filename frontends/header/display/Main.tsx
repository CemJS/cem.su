import { Cemjsx, Fn, front } from "cemjs-all"
import logo from '@svg/logo.svg'
import menu from '@json/menu'

const RenderMenu = function ({ menu }) {
    return (
        <ul class="header-list">
            {
                menu.map((item: any) => {
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
    // console.log('=2ffd0d=', front.Variable.Auth)
    return (
        <div class="wrapper">
            <div class="header-inner">
                <nav class="header-nav">
                    <a href="/" onclick={Fn.link} class="header-logo">
                        <img src={logo} alt="Crypto Emergency" />
                    </a>
                    <RenderMenu menu={menu} />
                </nav>

                <div class="header-tools">
                    <div
                        class="header__lang"
                        onclick={() => Fn.initOne("modalLanguage", { title: "Выбор основного языка" })}
                    >
                        <span>Русский</span>
                        <span class="i i-lang"></span>
                    </div>

                    {
                        front.Variable.Auth ?
                            <div onclick={() => Fn.initOne("sidebar", {})}>Profile</div> :
                            <div class="header-auth">
                                <span>Вход</span>
                                <button
                                    class="btn"
                                    onclick={() => Fn.initOne("modalRegistration", {})}
                                >Регистрация</button>
                            </div>


                    }
                </div>

            </div>
        </div>
    )
}