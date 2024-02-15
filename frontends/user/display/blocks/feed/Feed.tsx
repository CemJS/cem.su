import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Tiles from "./Tiles"

Static.stateFeed = true

export default function () {
    Fn.log('=1614f1=', Static.stateFeed)
    return (
        <div class="block-one c-container">
            <div class="feed-main-block">
                <div class="user-feed">
                    <div class="user-feed__block">
                        <div class="user-feed__header">
                            <h2>Лента пользователя</h2>
                            <ul class="user-feed__toggles-view">
                                <li>
                                    <a
                                        onclick={() => { Static.stateFeed = false }}
                                        class={Static.stateFeed ? "user-feed__toggles" : "user-feed__toggles user-feed__toggles-active"}>
                                        Список
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onclick={() => { Static.stateFeed = true }}
                                        class={Static.stateFeed ? "user-feed__toggles user-feed__toggles-tile user-feed__toggles-active"
                                            :
                                            "user-feed__toggles user-feed__toggles-tile"}>
                                        Плитка
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="video__container ">
                            <Tiles />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}