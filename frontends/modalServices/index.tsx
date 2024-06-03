import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        front.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    setTimeout(() => {
        Fn.clearData()
        front.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.loader = async () => {
    Static.platformServices = [
        {
            name: front.Variable.words?.chapters?.lenta,
            icon: "lenta",
            link: "/lenta"
        },
        {
            name: front.Variable.words?.chapters?.qa,
            icon: "qa",
            link: "/qsts"
        },
        {
            name: front.Variable.words?.chapters?.users,
            icon: "users",
            link: "/users"
        },
        {
            name: front.Variable.words?.chapters?.exchanges,
            icon: "chart-bar",
            link: "/exchangers"
        },
        {
            name: front.Variable.words?.chapters?.exchangers,
            icon: "arrow-path-rounded-square",
            link: "/exchanges"
        },
        {
            name: front.Variable.words?.chapters?.exhangeRates,
            icon: "currency-dollar",
            link: "/exchange-rates"
        },
        // {
        //     name: "ICO рейтинг",
        //     icon: "user",
        //     link: "#"
        // },
        // {
        //     name: "Стартапы",
        //     icon: "user",
        //     link: "#"
        // },
        {
            name: front.Variable.words?.chapters?.news,
            icon: "newspaper",
            link: "/news"
        },
        {
            name: front.Variable.words?.chapters?.career,
            icon: "academic-cap",
            link: "/career"
        }
      ]

    return
}

front.display = () => {
    return (
        <div class="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)] z-10 transition-all opacity-0 scale-125" ref="modal" init={Func.show}
            onclick={(e: any) => {
                if (e.target === Ref.modalBody) {
                    Func.close()
                }
            }}>
            <Navigation />
        </div>
    )
}

export { front }