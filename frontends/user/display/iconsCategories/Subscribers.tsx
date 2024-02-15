import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-usercategories__item">
            <i onclick={async () => {
                Static.feed = false
                Static.aboutMe = false
                Static.questions = false
                Static.answers = false
                Static.subscribers = true
                Static.subscriptions = false
                Static.awards = false
                Static.socials = false
                const getSubscribers = {
                    "action": "getSubscribers",
                    "id": Static.record?.id
                }
                let content = await front.Services.functions.sendApi("/api/Users/profile", getSubscribers)
                //проверка на error
            }}
                class={`c-usercategories__icon c-usercategories__icon--${Static.subscribers === true ? "followers"
                    : "followers_inactive"}`}
                data-profilepage="aboutUser"></i>
            <div class="user__category__gradient_frame">
                <div class="user__category__gray_background">
                    <span class="user__category__gradient_text">
                        {Static.record?.statistics?.followersCount}
                    </span>
                </div>
            </div>
        </div>
    )
}