import { Cemjsx, Static, Fn, Func } from "cemjs-all"

const RenderListCountries = function ({ countries }) {
    return (
        <ul class="list modal_scroll" role="list">
            {
                countries.map(item => {
                    return (
                        <li class="list__item"
                            onclick={() => {
                                Static.callback(item)
                                Func.close()
                            }}
                        >
                            <span>{item.orig_name}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default function () {
    // Fn.log('=dd00ae=', Static.records)
    return (
        <main class="modal_main">
            <div class="mt-15">
                <RenderListCountries countries={Static.records} />
            </div>
        </main>
    )
}