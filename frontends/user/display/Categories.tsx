import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Information from "./iconsCategories/Information"
import Questions from "./iconsCategories/Questions"
import Answers from "./iconsCategories/Answers"
import Subscribers from "./iconsCategories/Subscribers"
import Subscriptions from "./iconsCategories/Subscriptions"
import Awards from "./iconsCategories/Awards"
import Socials from "./iconsCategories/Socials"

export default function () {
    return (
        <div class="c-usercategories  c-container">
            <Information />
            <Questions />
            <Answers />
            <Subscribers />
            <Subscriptions />
            <Awards />
            <Socials />
        </div >
    )
}