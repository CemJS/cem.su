import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Information from "./blocks/information/Information"
import Questions from "./blocks/questions/Questions"

export default function () {
    return (
        <div class="userMainBlock">
            {Static.aboutMe === true ?
                <Information />
                : null}
            {Static.questions === true ?
                <Questions />
                : null}
        </div>
    )
}