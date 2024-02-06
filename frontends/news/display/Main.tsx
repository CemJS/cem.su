import { Cemjsx, Static, Fn, front, Events } from "cemjs-all"

const HeaderBack = function ({ title }) {
    return (
        <div class="back">
            <div class="wrapper">
                <div class="back-inner">
                    <span
                        class="back-inner_arrow"
                        onclick={() => {
                            Fn.linkChange("/")
                        }}
                    >
                        <i class="i i-arrow-left"></i>
                    </span>

                    <h5 class="back-title">{title}</h5>

                    <span
                        class="back-ellipsis"
                        onclick={() => Fn.initOne("modalTools", {})}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default function () {
    return (
        <section>
            <HeaderBack title="Новости" />
            <div class="news">
                {
                    Static.records.map((item, index) => {
                        return (
                            <a class="news__item"
                                init={($el: any) => {
                                    if (index == Static.records?.length - 1) {
                                        const observer = new IntersectionObserver((entries) => {
                                            entries.forEach(async (entry) => {
                                                if (entry.isIntersecting) {
                                                    observer.unobserve($el);
                                                    front.Services.functions.sendApi("/api/events/News", {
                                                        action: "skip",
                                                        lang: "ru",
                                                        category: Static.activeItem,
                                                        skip: Static.records.length
                                                    });
                                                    // return
                                                }
                                            });
                                        });
                                        observer.observe($el);
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
                                    Static.headerBackTitle = item.title
                                    Static.headerBackUrl = "/news"
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
                                        {/* <i class="i i-calendar"></i> */}
                                        {front.Services.functions.timeStampToDate(item.dateCreate, ".")}
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}