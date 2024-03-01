import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import defaultGray from "@svg/lenta/defaultGray.svg"
import settingsIcon from "@svg/profile/settingsIcon.svg"

let parent = null

export default function () {
    // Fn.log("Static.record", Static.record);
    // Fn.log('=2ae43c=', front.Variable.DataUrl[1])
    return (
        <div class="c-userpreview__avatar">
            <a href="">
                <div class="c-avataricon  ">
                    <img class="c-avataricon__photo" src={Static.record?.avatar?.name ?
                        `/assets/upload/avatar/${Static.record?.avatar?.name}`
                        :
                        avatarDefault} />
                    <img class="c-avataricon__frame"
                        src={Static.record?.frame?.name ?
                            `/contents/images/lenta/${Static.record?.frame?.name}`
                            :
                            defaultGray} />
                    <div>
                        <div class="c-avataricon__level dn">
                            <img src="" />
                        </div>
                        {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] ? <div class="c-avataricon__settings">
                            <img src={settingsIcon} />
                        </div> :
                            <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
                        }
                        {/* <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div> */}

                    </div>
                </div>
            </a>
        </div>
    )
}