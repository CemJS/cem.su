import { Cemjsx, Func } from "cemjs-all"

export default function () {
    return (
        <header class="flex justify-between items-center mb-[1.2rem]">
            <h2 class="text-[clamp(1.2rem,_2vw,_1.5rem)] leading-[125%] text-balance">Выбрать монеты</h2>
            <button class="btn_dark btn" onclick={Func.close}>
                <i class="i-cancel text-[0.85rem] !font-['cemicons'] normal-case [-webkit-font-smoothing:antialiased] [font-style:normal] [font-variant:normal] [font-weight:normal] leading-[1] before:content-['\e906']"></i>
            </button>
        </header>
    )
}