import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function ({ item, index }) {
    return (
        <div init={($el: any) => {
            if (index == Static.records?.length - 1) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(async entry => {
                        if (entry.isIntersecting) {
                            observer.unobserve($el)
                            let res = front.Services.functions.sendApi("/api/events/Exchanges", {
                                "action": "skip",
                                "skip": Static.records?.length,
                                "uuid": `${localStorage?.uuid}`,
                            })
                        }
                    })
                })
                observer.observe($el)
            }
        }} class="body-card">
            <div class="body-card__container">
                <div class="body-card__container__main-block" style="flex-direction: column">
                    <div class="body-card__container_font-size pt-10">{item?.name}</div>
                    <div class="body-card__container_font-size pt-20 coins_wrap">
                        {
                            item.listCoins?.map((el: any, index: number) => {
                                // console.log("el", el);

                                return (
                                    <img src={`/contents/coins/${el?.mediaName}.svg`} class="coins_wrap_item"></img>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="body-card__container__btn-block w100 pt-10 pb-10">
                    <div class="btn_border-wrap body-card__container_btn_size mY-auto h100">
                        <a href={item?.url} onclick={Fn.link}>
                            <button class="btn_border bg-mw">
                                Обменять
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}