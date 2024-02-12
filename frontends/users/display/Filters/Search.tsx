import { Cemjsx, Fn, Static, front } from "cemjs-all"

function debounce(func: any, delay: number) {
    let timeoutId: any
    return function (...args: any) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        }, delay)
    }
}

export default function () {

    return (
            <div class="users__search">
                <input
                    type="text"
                    placeholder="Найти друзей"
                    value={Static.search}
                    oninput={debounce(async (e: any) => {
                        Static.search = e.target.value.toLocaleLowerCase()
                        front.func.updateFilter()
                    }, 400)} />
            </div>
    )
}