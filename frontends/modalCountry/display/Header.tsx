import { Cemjsx, Func } from "cemjs-all"

export default function () {
    return (
        <header class="modal-header">
            <h2 class="modal-header__title">Выбрать страну</h2>
            <button class="btn btn_close" onclick={Func.close}>
                <i class="i i-cancel"></i>
            </button>
        </header>
    )
}