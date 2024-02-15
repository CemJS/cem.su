import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Information from "./blocks/information/Information"
import Questions from "./blocks/questions/Questions"
import Answers from "./blocks/answers/Answers"
import Subscribers from "./blocks/subscribers/Subscribers"
import Subscriptions from "./blocks/subscriptions/Subscriptions"
import Awards from "./blocks/awards/Awards"
import Socials from "./blocks/socials/Socials"

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
            {Static.subscribers === true ?
                <Subscribers />
                : null}
            {Static.subscriptions === true ?
                <Subscriptions />
                : null}
            {Static.awards === true ?
                <Awards />
                : null}
            {Static.socials === true ?
                <Socials />
                : null}
        </div>
    )
}