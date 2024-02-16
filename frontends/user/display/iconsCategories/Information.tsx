import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-usercategories__item">
            <i
                onclick={async () => {
                    Static.feed = false
                    Static.aboutMe = true
                    Static.questions = false
                    Static.answers = false
                    Static.subscribers = false
                    Static.subscriptions = false
                    Static.awards = false
                    Static.socials = false
                    Static.gallery = false
                    // const getQuestions = {
                    //     "action": "getQuestions",
                    //     "id": Static.record?.id,
                    //     "uuid": `${localStorage?.uuid}`
                    // }
                    // let content = await front.Services.functions.sendApi("/api/Users/profile", getQuestions)
                }}
                class={`c-usercategories__icon c-usercategories__icon--${Static.aboutMe === true ? "information"
                    : "information_inactive"}`}
                data-profilepage="aboutUser"></i>
        </div>
    )
}