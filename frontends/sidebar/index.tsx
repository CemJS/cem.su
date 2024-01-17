import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('sidebar_active');
        // this.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.sidebar.classList.remove('sidebar_active');
    setTimeout(() => {
        Fn.clearData()
        // this.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.loader = () => {
    Static.sections = [
        {
            icon: 'calendar',
            name: 'Лента пользователей',
            link: '#'
        },
        {
            icon: 'faq',
            name: 'Вопросы и ответы',
            link: '#'
        },
        {
            icon: 'faq',
            name: 'ICO Рейтинг',
            link: '#'
        },
        {
            icon: 'user',
            name: 'Стартапы',
            link: '#'
        },
        {
            icon: 'phone',
            name: 'Обменники',
            link: '#'
        },
        {
            icon: 'copy',
            name: 'Пользователи',
            link: '#'
        },
        {
            icon: 'bubbles2',
            name: 'Эксперты',
            link: '#'
        },
        {
            icon: 'users',
            name: 'Создатели контента',
            link: '#'
        },
    ]

    Static.menu = [
        {
            icon: 'user',
            name: 'Профиль',
            link: '#'
        },
        {
            icon: 'faq',
            name: 'Награды',
            link: '#'
        },
        {
            icon: 'faq',
            name: 'Мои активы',
            link: '#'
        },
        {
            icon: 'user',
            name: 'Настройки',
            link: '#'
        },
        {
            icon: 'phone',
            name: 'Выход',
            link: '#'
        }
    ]
    return
}

front.display = () => {
    return (
        <div
            class="sidebar"
            ref="sidebar"
            init={Func.show}
            onclick={(e: any) => {
                if (e.target === Ref.sidebarOverlay) {
                    Func.close()
                }
            }}
        >
            <Navigation />
        </div>
    )
}

export { front }