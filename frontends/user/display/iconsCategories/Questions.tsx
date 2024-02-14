import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-usercategories__item">
            <i
                onclick={async () => {
                    Static.questions = true,
                        Static.answers = false
                    Static.aboutMe = false
                    const getQuestions = {
                        "action": "getQuestions",
                        "id": Static.record?.id,
                        "uuid": `${localStorage?.uuid}`
                    }
                    let content = await front.Services.functions.sendApi("/api/Users/profile", getQuestions)
                    //проверка на error

                }}
                class={`c-usercategories__icon c-usercategories__icon--${Static.questions === true ? "questions"
                    : "questions_inactive"}`}
                data-profilepage="aboutUser"></i>
            <div class="user__category__gradient_frame">
                <div class="user__category__gray_background">
                    <span class="user__category__gradient_text">
                        {Static.record?.statistics?.questionsCount}
                    </span>
                </div>
            </div>
        </div>
    )
}