import { Cemjsx, Static, Fn, Func } from "cemjs-all"
import services from '@json/services'

const RenderListServices = function () {
    return (
        <div class="services" role="list">
            {
                services.map(item => {
                    return (
                        <a class="services__item"
                            onclick={() => {
                                Func.close()
                            }}
                        >
                            <div class="services__item-img">
                                <i class={["i", `i-${item.icon}`]}></i>
                            </div>
                            <span>{item.name}</span>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default function () {
    return (
        <main class="modal_main">
            <div class="mt-15">
                <RenderListServices />
            </div>
        </main>
    )
}