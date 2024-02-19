import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all"
import Navigation from "./navigation"
import languages from '@json/languages'


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

    Static.records = []
    let url = front.Services.functions.makeUrlEvent("Countries", {})
    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                // Fn.log('=0b636f=', "Static.records", "get", json)
                Static.records = json
            },
        },
        {
            type: "add",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                Static.records.push(...json)
            },
        }
    ]
    Events.countries = await Fn.event(url, listener)


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