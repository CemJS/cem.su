import { Cemjsx, Static, Fn, front } from "cemjs-all"

export default function () {
    Fn.log('=3aa4e9=', Static.records)
    return (
        <section class="news">
            {
                Static.records.map(item => {
                    return (
                        <div class="news__item">
                            <div class="news__item-img">
                                <img
                                    src={`https://crypto-emergency.com/assets/upload/news/${item.image}`}
                                    alt={item.title}
                                />
                            </div>
                            <h3 class="news__item-title">{item.title}</h3>
                            <p class="news__item-desc">{item.text}</p>
                            <div class="new__item-statistic">
                                <div>{front.Services.functions.timeStampToDate(item.dateCreate, ".")}</div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}