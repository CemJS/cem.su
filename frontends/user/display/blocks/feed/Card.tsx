import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import play_btn from "@svg/icons/play_button.svg"

export default function () {
    // Fn.log("wtf?", Static.record?.feed[0]);

    return (
        <div style="width: 100%;">
            {Static.record?.feed?.map((item: any, key: number) => {
                // Fn.log('=b56954=', item)
                return (
                    <div key={key} class="feed-card__item">
                        <div class="card-position">
                            <div class="feed-card__item__header">

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}