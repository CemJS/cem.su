import { Cemjsx, Static, Fn, front, Events } from "cemjs-all"

export default function () {
    Fn.log('=3aa4e9=', Static.records)
    return (
        <section class="news">
            {
                Static.records.map(item => {
                    return (
                        <div class="news__item"
                            onclick={() => {
                                Static.record = item._id
                                let listener = [
                                    {
                                        type: "add",
                                        fn: ({ data }) => {
                                            let json = front.Services.functions.strToJson(data)
                                            if (!json) { return }
                                            Static.records = json
                                        },
                                    }
                                ]
                                Events.news.change(front.Services.functions.makeUrlEvent("News", {
                                    action: "show",
                                    id: item._id
                                }), listener)
                                Fn.linkChange(`/news/show/${item._id}`)
                            }}

                        >
                            <div class="news__item-img">
                                <img
                                    src={`/assets/upload/news/${item.image}`}
                                    alt={item.title}
                                />
                            </div>
                            <h3 class="news__item-title">{item.title}</h3>
                            <p class="news__item-desc">{item.text}</p>

                            <div class="news__item-statistic">
                                <div class="news__item-statistic-el">
                                    <i class="i i-comment"></i>{item.statistic.comments}
                                </div>
                                <div class="news__item-statistic-el">
                                    <i class="i i-calendar"></i>
                                    {front.Services.functions.timeStampToDate(item.dateCreate, ".")}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}