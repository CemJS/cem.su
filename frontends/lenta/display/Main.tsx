import { Cemjsx, Fn } from "cemjs-all"

export default function () {
    return (
        <div class="lenta">
            <div class="lenta-item">
                <div class="lenta-item__header">
                    <div class="user-circle"></div>
                    <div class="lenta-item__header-info">
                        <span class="lenta-item__header-title">Annyshka Shalbuzova</span>
                        <span
                            class="back-ellipsis"
                            onclick={() => Fn.initOne("modalTools", {})}
                        ></span>
                    </div>
                </div>

                <div class="lenta-item__body">
                    <video height="500" ref="video" src="/contents/video/yan.MOV" preload="none" playsinline="true" poster="/contents/poster/yan.png"></video>
                    <div class="controlls">
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}