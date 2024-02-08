import { Cemjsx, Static } from "cemjs-all"

const RenderListLanguages = function ({ languages }) {
    return (
        <ul class="list modal_scroll" role="list">
            {
                languages.map(item => {
                    return (
                        <li class="list__item">
                            <img
                                class="list__item-img"
                                src={`/contents/svg/flags/${item.icon}.svg`}
                                alt={item.name}
                            />
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default function () {
    return (
        <main class="modal_main">
            <div class="mt-15">
                <RenderListLanguages languages={Static.languages} />
            </div>
        </main>
    )
}