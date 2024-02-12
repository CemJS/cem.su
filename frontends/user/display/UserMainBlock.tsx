import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import AboutMe from "./blocks/AboutMe"
import Interests from "./blocks/Interests"

export default function () {
    return (
        <div class="userMainBlock">
            <div class="about-user c-container">
                <h2>Личная информация</h2>
                <div class="user__info">
                    <AboutMe />
                    <Interests />
                </div>
            </div>
        </div>
    )
}