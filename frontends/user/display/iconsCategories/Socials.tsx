import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-usercategories__item">
            <i onclick={async () => {
                Static.questions = false
                Static.answers = false
                Static.aboutMe = false
                Static.subscribers = false
                Static.subscriptions = false
                Static.awards = false
                Static.socials = true
                const getSocials = {
                    "action": "getSocials",
                    "id": Static.record?.id,
                    "uuid": `${localStorage?.uuid}`
                }
                let content = await front.Services.functions.sendApi("/api/Users/profile", getSocials)
                //проверка на error
            }}
                class={`c-usercategories__icon c-usercategories__icon--${Static.socials === true ? "social"
                    : "social_inactive"}`}
                data-profilepage="aboutUser"></i>
            <div class="user__category__gradient_frame">
                <div class="user__category__gray_background">
                    <span class="user__category__gradient_text">
                        {Static.record?.statistics?.SubscriptionsCount}
                    </span>
                </div>
            </div>
        </div>
    )
}