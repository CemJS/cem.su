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

    return
}

front.display = () => {
    return (
        <div class="modal" ref="modal" init={Func.show}
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