import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import defaultIcon from "@svg/profile/frame/default.svg";

let parent = null

export default function () {
    Fn.log("Static.record", Static.record);
    return (
        <div class="c-userpreview__avatar">
            <a href="">
                <div class="c-avataricon  ">
                    <img class="c-avataricon__photo" src={`/assets/upload/avatar/${Static.record?.avatar?.name}`} />
                    <img class="c-avataricon__frame"
                        src={"/contents/images/" + (Static.record?.frame?.name === "rainbow.gif" ? "rainbow.gif" :
                            Static.record?.frame?.name === "default.svg" ? "default.svg" :
                                Static.record?.frame?.name === "animate.gif" ? "animate.gif" : "")} />
                    <div>
                        <div class="c-avataricon__level dn">
                            <img src="" />
                        </div>
                        <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div>
                        <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                    </div>
                </div>
            </a>
        </div>
    )
}