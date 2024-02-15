import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Avatar from "./Avatar";

let parent = null

export default function () {
    // Fn.log("Static.record", Static.record);
    return (
        <div class="c-userpreview__header">
                <Avatar />
            <img class="c-userpreview__bg" src="/contents/images/6625929e37285e89842e.jpg" />
            <div class="c-userpreview__buttons">
                <div class="c-userpreview__container">
                    <a class="c-userpreview__btn 89">
                        <span>Sand</span>
                    </a>
                    <a class="c-userpreview__btn">
                        <span class="subscribe_status">Подписаться</span>
                    </a>
                </div>
            </div>
        </div >
    )
}