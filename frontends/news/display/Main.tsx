import { Cemjsx } from "cemjs-all"
import news from "@json/news"

export default function () {
    return (
        <section class="news">
            {
                news.map(item => {
                    return (
                        <div class="news__item">
                            <div class="news__item-img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 class="news__item-title">{item.title}</h3>
                            <p class="news__item-desc">{item.text}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}