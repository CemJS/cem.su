import { Cemjsx, Func, Static } from "cemjs-all"

export default function () {
    return (
        <footer class="modal-footer">
            <div class="g-colEqual-2 mt-15">
                <button
                    class={[
                        "btn",
                        "w100",
                        Static.filterCoins.length ? null : "btn_passive"
                    ]}
                    onclick={() => {
                        Static.callback(Static.filterCoins)
                        Func.close()
                    }}
                >
                    Применить
                </button>
                <div class="btn_border-wrap">
                    <button
                        class="btn_border h100"
                        onclick={() => {
                            Static.filterCoins = ""
                        }}
                    >
                        Сбросить
                    </button>
                </div>
            </div>
        </footer>
    )
}