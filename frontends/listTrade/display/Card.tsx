import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function ({ item, index }) {

    return (
        <div class="body-card">
            <div class="body-card__container">
                <div class="body-card__container__main-block">
                    <img class="crypto_coin_icon pt-10"
                        src={`/assets/upload/worldPress/${item?.mediaName}`}>
                    </img>
                    {/* <div class="body-card__container_font-size pt-10">{item.name}</div> */}
                    <div class="body-card__container_font-size pt-10">{item?.score}</div>
                    <div class="dNoneDiv">
                        <img
                            class="trades-chart pt-10"
                            src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item?.marketId}.svg`}>
                        </img>
                    </div>
                </div>
                <div class="body-card__container__btn-block w100">
                    <div class="btn_border-wrap body-card__container_btn_size mY-auto h100">
                        <a href={item?.url} onclick={Fn.link}>
                            <button class="btn_border bg-mw">
                                Торговать
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}