import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import AboutMe from "./AboutMe"
import Interests from "./Interests"

export default function () {
    return (
        <div class="block-one">
            <h2>Личная информация</h2>
            <div class="user__info">
                <AboutMe />
                <Interests />
            </div>
        </div>
    )
}