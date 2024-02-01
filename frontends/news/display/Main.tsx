import { Cemjsx, Static, Fn, front, Events } from "cemjs-all"

export default function () {
    // Fn.log('=3aa4e9=', Static.records)
    return (
        <section class="news">

            <button
                onclick={() => {
                    Fn.log('=ac9ca7=', 12424)
                    let data: Object = {
                        suuid: localStorage.suuid,
                        action: "test",
                        category: "Bitcoin",
                    };
                    front.Services.functions.sendApi("/api/events/News?uuid=" + localStorage.uuid, data);
                }}
            >
                sdhgkjhdkjghkdjg
            </button>
            {
                Static.records.map((item, index) => {
                    return (
                        <div class="news__item"
                            init={($el) => {
                                if (index == Static.records.length - 1) {
                                    const observer = new IntersectionObserver((entries) => {
                                        entries.forEach(async entry => {
                                            if (entry.isIntersecting) {
                                                observer.unobserve($el)
                                                Events.news.change(front.Services.functions.makeUrlEvent("News", {
                                                    action: "skip",
                                                    lang: "ru",
                                                    category: Static.activeItem,
                                                    skip: Static.records.length
                                                }))
                                                return
                                            }
                                        })
                                    })
                                    observer.observe($el)
                                }
                            }}
                            onclick={async () => {
                                Static.record = item._id
                                let listener = [
                                    {
                                        type: "get",
                                        fn: ({ data }) => {
                                            let json = front.Services.functions.strToJson(data)
                                            if (!json) { return }
                                            Static.record = json
                                        },
                                    }
                                ]
                                Events.new = await Fn.event(front.Services.functions.makeUrlEvent("News", {
                                    action: "show",
                                    id: item._id
                                }), listener)
                                // Events.news.change(front.Services.functions.makeUrlEvent("News", {
                                //     action: "show",
                                //     id: item._id
                                // }), listener)
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
                            <p class="news__item-desc">{item.preview}</p>

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