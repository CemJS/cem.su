import { Cemjsx, Fn, Static } from "cemjs-all"
import arrowUp from '@svg/icons/up_arrow.svg'
import arrowDown from '@svg/icons/down_arrow.svg'



export default function () {
    if (!Static.records.length) {
        return (
            <div class="line-wrap">
            </div>
        )
    }
    Fn.log("records", Static.records)
    return (

        <div class="line-wrap">
            <a class="line-wrap" href="/exchange-rates" onclick={Fn.link} >
                {
                    ([1, 2, 3, 4]).map(() => {
                        return (
                            <div class="line__track">
                                {
                                    Static.records.map((item) => {
                                        return (
                                            <div class="line__item">
                                                <div class="line__item_img">
                                                    <img src={`/contents/coins/${item.nameCoin}.svg`} alt={item.nameCoin} />
                                                </div>
                                                <span class="line__item_text">{item.nameCoin + "/USDT"}</span>
                                                <span class="line__item_text line__item_text-price">
                                                    {item.currentCourse.toFixed(
                                                        item.nameCoin === "cem" ? 4 : 2
                                                    )}
                                                </span>
                                                <div class="line__item_change">
                                                    {item.change.toFixed(2)}
                                                    <div class="line-img_change">
                                                        <img src={item.change >= 0 ? arrowUp : arrowDown}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </a>
        </div>
        // <div class="course-line" >
        //     <div class="course-line__track">
        //         {
        //             courses.map(item => {
        //                 return (
        //                     <div class="course-line__item">
        //                         <div class="course-line__item-img">
        //                             {/* <img src={`/assets/svg/coins/${item.nameCoin}.svg`} alt={item.nameCoin} /> */}
        //                         </div>
        //                         <span class="course-line__item-text">{item.nameCoin}</span>
        //                         <span>{item.currentCourse}</span>

        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
    )
}