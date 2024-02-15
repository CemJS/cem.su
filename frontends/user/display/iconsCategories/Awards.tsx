import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-usercategories__item">
            <i onclick={async () => {
                Static.feed = false
                Static.aboutMe = false
                Static.questions = false
                Static.answers = false
                Static.subscribers = false
                Static.subscriptions = false
                Static.awards = true
                Static.socials = false
                const getAwards = {
                    "action": "getAwards",
                    "id": Static.record?.id
                }
                let content = await front.Services.functions.sendApi("/api/Users/profile", getAwards)
                //проверка на error
            }}
                class={`c-usercategories__icon c-usercategories__icon--${Static.awards === true ? "awards"
                    : "awards_inactive"}`}
                data-profilepage="aboutUser">
            </i>
        </div>
    )
}