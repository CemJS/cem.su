import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Information from "./iconsCategories/Information"
import Questions from "./iconsCategories/Questions"
import Answers from "./iconsCategories/Answers"

export default function () {
    return (
        <div class="c-usercategories  c-container">
            <Information />
            <Questions />
            <Answers />
        </div >
    )
}