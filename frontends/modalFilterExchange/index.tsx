import { Cemjsx, front, Func, Static, Fn, Ref, Events } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('opacity-[1]', 'scale-[1]');
        // front.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('opacity-[1]', 'scale-[1]');
    setTimeout(() => {
        Fn.clearData()
        // front.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.loader = async () => {
    // Static.filterCoins
    Static.records, Static.coins = []
    let url = front.Services.functions.makeUrlEvent("coins", {})
    let listener = [
        {
            type: "get",
            fn: ({ data }) => {
                let json = front.Services.functions.strToJson(data)
                if (!json) { return }
                // Fn.log('=0b636f=', "Static.records", "get", json)
                Static.records = json
                Static.coins = json
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
    Events.coins = await Fn.event(url, listener)

    return
}

front.display = () => {
    return (
        <div class="fixed top-0 left-0 w-full h-full bg-[#00000080] z-[10] opacity-0 scale-[1.2] [transition:transform_0.2s_0s_ease-in-out,_opacity_0.2s_0s_ease-in-out]" ref="modal" init={Func.show}
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