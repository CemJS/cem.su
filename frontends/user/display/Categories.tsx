import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Information from "./iconsCategories/Information"
import Questions from "./iconsCategories/Questions"
import Answers from "./iconsCategories/Answers"
import Subscribers from "./iconsCategories/Subscribers"
import Subscriptions from "./iconsCategories/Subscriptions"
import Awards from "./iconsCategories/Awards"
import Socials from "./iconsCategories/Socials"
import Feed from "./iconsCategories/Feed"
import Gallery from "./iconsCategories/Gallery"

export default function () {
    return (
        <div class="c-usercategories">
            <Feed />
            <Information />
            <Questions />
            <Answers />
            <Subscribers />
            <Subscriptions />
            <Awards />
            <Socials />
            <Gallery />
        </div >
    )
}