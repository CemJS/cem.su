import { Cemjsx } from "cemjs-all"
import languages from '@json/languages'

export default function () {
    return (
        <main class="modal_main">
            <ul>
                {
                    languages.map(item => {
                        return (
                            <li>{item.name}</li>
                        )
                    })
                }
            </ul>
        </main>
    )
}