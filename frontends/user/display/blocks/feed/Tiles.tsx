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
                            <div class='video__container'>
                                <div>
                                    <img src={play_btn} class="img-tiles" />
                                    {item?.media[0]?.type === 'video' ?
                                        <video playsinline="true" poster="https://crypto-emergency.com/assets/image/bfb4bd06106cea11acbc.jpg"
                                            preload="none" src={"/assets/upload/posts/" + item?.media[0]?.name} />
                                        :
                                        <img src={"/assets/upload/posts/" + item?.media[0]?.name} />
                                    }
                                </div>
                            </div>
                        </figure>
                    </a>
                )
            })}
        </div>
    )
}