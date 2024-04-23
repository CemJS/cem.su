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
        <div class="sticky right-[5.75rem] z-[2] top-0 flex justify-between w-full max-[1024px]:px-[.625rem] [margin:10px_auto_0] pt-[.625rem] bg-[--noble_black] overflow-y-hidden overflow-x-auto">
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