import { Cemjsx, Static, Ref } from "cemjs-all"
import socials from '@json/socials'
import languages from '@json/languages'

const RenderSidebarMenu = function ({ menu }) {
    return (
        <div class="sidebar-menu">
            {
                menu.map(item => {
                    return (
                        <div class="sidebar-menu__item">
                            <a href={item.link}>
                                <i class={["i", `i-${item.icon}`]}></i>{item.name}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

const RenderSidebarSubmenu = function ({ submenu }) {
    return (
        <div></div>
    )
}

const RenderSocials = function ({ socials }) {
    console.log('=f2958e=', socials)
    return (
        <div class="sidebar-socials">
            {
                socials.map(item => {
                    return (
                        <div >
                            <a class="sidebar-socials__item" href={item.url}><i class={["i", `i-${item.icon}`]}></i></a>
                        </div>
                    )
                })
            }
        </div>
    )
}

const RenderLanguages = function ({ languages }) {
    return (
        <ul class="sidebar-langList" role="list">
            {
                languages.map(item => {
                    return (
                        <li class="sidebar-langList__item">{item.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default function () {
    return (
        <main class="sidebar-content">
            <span class="sidebar-subtitle">Разделы</span>
            <RenderSidebarMenu menu={Static.sections} />
            <span class="sidebar-subtitle">Меню</span>
            <RenderSidebarMenu menu={Static.menu} />
            <span class="sidebar-subtitle">Crypto Emergency</span>
            <div class="sidebar-menu">
                <div class="sidebar-menu__item">
                    <div
                        class="sidebar-menu__item-btn"
                        onclick={(e: any) => {
                            console.log('=f85b54=', e.parentNode)
                            // Ref.submenu.
                            Ref.submenu.classList.toggle('sidebar-submenu_active')
                        }}
                    >
                        <i class="i i-settings"></i>Компания<i class="i i-right i_dropdown"></i>
                    </div>
                    <div class="sidebar-submenu" ref="submenu">
                        <div class="sidebar-submenu__item">
                            <a href="#">О нас</a>
                        </div>
                        <div class="sidebar-submenu__item">
                            <a href="#">Карьера</a>
                        </div>
                        <div class="sidebar-submenu__item">
                            <a href="#">Lite Paper</a>
                        </div>
                    </div>
                </div>

                <div class="sidebar-menu__item">
                    <a href="#">
                        <i class="i i-user"></i>lala
                    </a>
                </div>
                <div class="sidebar-menu__item">
                    <a href="#">
                        <i class="i i-user"></i>lala
                    </a>
                </div>
                {/* <div class="sidebar-menu__item">
                    <a href="#" class="sidebar-menu__item-btn">
                        <i class="i i-settings"></i>Поддержка<i class="i i-right i_dropdown"></i>
                    </a>
                    <div class="sidebar-submenu">
                        <div class="sidebar-submenu__item">
                            <a href="#">Контакты</a>
                        </div>
                        <div class="sidebar-submenu__item">
                            <a href="#">Партнёрская программа</a>
                        </div>
                    </div>
                </div>
                <div class="sidebar-menu__item">
                    <a href="#" class="sidebar-menu__item-btn">
                        <i class="i i-settings"></i>Правила<i class="i i-right i_dropdown"></i>
                    </a>
                    <div class="sidebar-submenu">
                        <div class="sidebar-submenu__item">
                            <a href="#">Пользовательское соглашение</a>
                        </div>
                        <div class="sidebar-submenu__item">
                            <a href="#">Политика использования данных</a>
                        </div>
                        <div class="sidebar-submenu__item">
                            <a href="#">Политика cookies</a>
                        </div>
                    </div>
                </div>
                <div class="sidebar-menu__item">
                    <a href="#" class="sidebar-menu__item-btn">
                        <i class="i i-settings"></i>СЕМ<i class="i i-right i_dropdown"></i>
                    </a>
                    <div class="sidebar-submenu">
                        <div class="sidebar-submenu__item">
                            <a href="#">CEM Blockchain</a>
                        </div>
                        <div class="sidebar-submenu__item">
                            <a href="#">CEM Explorer</a>
                        </div>
                    </div>
                </div> */}
            </div>
            <span class="sidebar-subtitle">Социальные сети</span>
            <RenderSocials socials={socials} />


            {/* lang */}
            <div class="sidebar-content-lang" ref="sidebarLang">
                <div class="sidebar-content-lang-back">
                    <i class="i i-left"></i> Вернуться в меню
                </div>
                <div class={[
                    "modalWindow_field"
                ]}>
                    <input
                        type="еуче"
                        required
                        autocomplete="off"
                    />
                    <div class="modalWindow_field_labelLine">
                        <i class="i i-user"></i>
                        <span>Поиск по языкам</span>
                    </div>

                </div>
                <RenderLanguages languages={languages} />

            </div>
        </main>
    )
}