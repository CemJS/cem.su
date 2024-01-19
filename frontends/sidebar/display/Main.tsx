import { Cemjsx, Static, Ref } from "cemjs-all"
import socials from '@json/socials'

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
        <div class="sidebar-menu">
            {
                submenu.map(item => {
                    return (
                        <div
                            class="sidebar-menu__item"
                            onclick={(e: any) => {
                                e.currentTarget.classList.toggle('sidebar-menu__item_active')
                            }}
                        >
                            <div class="sidebar-menu__item-btn">
                                <i class={["i", `i-${item.icon}`]}></i>
                                {item.name}
                                <i class="i i-right i_dropdown"></i>
                            </div>
                            <div class="sidebar-submenu" >
                                {
                                    item.options.map(element => {
                                        return (
                                            <div class="sidebar-submenu__item">
                                                <a href={element.link}>{element.name}</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const RenderSocials = function ({ socials }) {
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

export default function () {
    return (
        <main class="sidebar-content">
            <span class="sidebar-subtitle">Разделы</span>
            <RenderSidebarMenu menu={Static.sections} />
            <span class="sidebar-subtitle">Меню</span>
            <RenderSidebarMenu menu={Static.menu} />
            <span class="sidebar-subtitle">Crypto Emergency</span>
            <RenderSidebarSubmenu submenu={Static.submenu} />
            <span class="sidebar-subtitle">Социальные сети</span>
            <RenderSocials socials={socials} />
        </main>
    )
}