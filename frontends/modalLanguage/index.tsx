import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all"
import Navigation from "./navigation"
import languages from '@json/languages'


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        // this.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    setTimeout(() => {
        Fn.clearData()
        // this.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.loader = async () => {

    if (!Static.full) {
        Static.languages = languages
        return
    }

    Static.records = []
    let url = front.Services.functions.makeUrlEvent("Languages", {})
    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                // Fn.log('=0b636f=', "Static.records", "get", json)
                Static.records, Static.recordsAll = json
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
    Events.languages = await Fn.event(url, listener)

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