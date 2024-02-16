import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import play_btn from "@svg/icons/play_button.svg"

export default function () {
    // Fn.log("wtf?", Static.record?.feed[0]);

    return (
        <div class='feed-tiles'>
        {Static.record?.feed?.map((item: any, key: number) => {
            // Fn.log('=b56954=', item)
            return (
                <a key={key} class="feed-tiles__item">
                    <figure class="feed-tiles__card">
                        {item?.media ?
                            <div class='video__container'>
                                {item?.media?.map((el: any, index: number) => {
                                    return (
                                        <div>
                                            <img src={play_btn} class="img-tiles" />
                                            {el.type === 'video' ? 
                                                <video playsinline="true" poster="/contents/image/posterGB.png"
                                                preload="none" src={"/assets/upload/posts/" + el.name} /> 
                                                :
                                                <img src={"/assets/upload/posts/" + el.name} />
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            : null}
                    </figure>
                </a>
            )
        })}
    </div>
    )
}