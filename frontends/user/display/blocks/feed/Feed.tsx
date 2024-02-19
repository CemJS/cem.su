import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import Tiles from "./Tiles"
import Card from "./Card"


export default function () {
    return (
        <div class="block-one c-container">
            <div class="feed-main-block">
                <div class="user-feed">
                    <div class="user-feed__block">
                        <div class="user-feed__header">
                            <h2>Лента пользователя</h2>
                            <ul class="user-feed__toggles-view">
                                <li onclick={() => { Static.feedState = false }}>
                                    <a
                                        class={Static.feedState ? "user-feed__toggles" : "user-feed__toggles user-feed__toggles-active"}>
                                        Список
                                    </a>
                                </li>
                                <li onclick={() => {
                                    Static.feedState = true
                                }}>
                                    <a
                                        class={Static.feedState ? "user-feed__toggles user-feed__toggles-tile user-feed__toggles-active"
                                            :
                                            "user-feed__toggles user-feed__toggles-tile"}>
                                        Плитка
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {Static.feedState ? <Tiles /> : <Card />}
                    </div>
                </div>
            </div>
        </div>
    )
}