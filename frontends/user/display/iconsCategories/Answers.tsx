import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-usercategories__item">
            <i
                onclick={async () => {
                    Static.feed = false
                    Static.aboutMe = false
                    Static.questions = false
                    Static.answers = true
                    Static.subscribers = false
                    Static.subscriptions = false
                    Static.awards = false
                    Static.socials = false
                    Static.gallery = false
                    const getAnswers = {
                        "action": "getAnswers",
                        "id": Static.record?.id
                    }
                    let content = await front.Services.functions.sendApi("/api/Users/profile", getAnswers)
                    //   Fn.log('=4b78f5=',Static.record?.statistics)
                }}
                class={`c-usercategories__icon c-usercategories__icon--${Static.answers === true ? "answers"
                    : "answers_inactive"}`}
                data-profilepage="aboutUser"></i>
            <div class="user__category__gradient_frame">
                <div class="user__category__gray_background">
                    <span class="user__category__gradient_text">
                        {Static.record?.statistics?.answersCount}
                    </span>
                </div>
            </div>
        </div>
    )
}