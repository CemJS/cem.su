import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function ({ item, index }) {
    return (
        <div class="body-card">
            <div class="bodyCard__container">
                <div class="bodyCard__container__main-block" style="flex-direction: column">
                    <div class="bodyCard__container_font-size pt-10">{item?.name}</div>
                    <div class="bodyCard__container_font-size pt-20 coins_wrap">
                        {
                            item.listCoins?.map((el: any, index: number) => {
                                // console.log("el", el);

                                return (
                                    <img src={`/contents/coins/${el?.icon}.svg`} class="coins_wrap_item"></img>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="bodyCard__container__btn-block w100 pt-10 pb-10">
                    <div class="btn_border-wrap bodyCard__container_btn_size mY-auto h100">
                        <a href={item?.url} onclick={Fn.link}>
                            <button class="btn_border bgMW">
                                Торговать
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}