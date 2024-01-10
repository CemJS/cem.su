import { Cemjsx, Static, Fn } from "cemjs-all"

export default function () {
    return (
        <div class="wrapper">
            <div class="back-inner">
                <span class="back-inner_arrow">
                    <i class="i i-arrow-left"></i>
                </span>

                <h5 class="back-title">Новости</h5>

                <span
                    class="back-ellipsis"
                    onclick={() => Fn.initOne("modalTools", {})}
                ></span>
            </div>
        </div>
    )
}