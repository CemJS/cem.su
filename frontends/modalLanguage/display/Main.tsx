import { Cemjsx } from "cemjs-all"
import languages from '@json/languages'

export default function () {
    return (
        <main class="modal_main">
            <ul class="list modal_scroll" role="list">
                {
                    languages.map(item => {
                        return (
                            <li class="list__item">
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}