import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Information from "./blocks/information/Information"
import Questions from "./blocks/questions/Questions"
import Answers from "./blocks/answers/Answers"

export default function () {
    return (
        <div class="user-main-block">
            {Static.aboutMe === true ?
                <Information />
                : null}
            {Static.questions === true ?
                <Questions />
                : null}
            {Static.answers === true ?
                <Answers />
                : null}
        </div>
    )
}