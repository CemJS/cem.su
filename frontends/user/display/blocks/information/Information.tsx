import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import AboutMe from "./AboutMe"
import Interests from "./Interests"

export default function () {
    Fn.log('=f35d19=', Static.record)
    return (
        <div class="block-one c-container">
            <h2>Личная информация</h2>
            <div class="user__info">
                <AboutMe />
                <Interests />
            </div>
        </div>
    )
}