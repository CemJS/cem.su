import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function ({ item, index }) {
    return (
        <div class="body-card">
            <div class="bodyCard__container">
                <div class="bodyCard__container__main-block">
                    <img class="crypto_coin_icon"
                        src={`/assets/upload/worldPress/${item?.logo}`}>
                    </img>
                    <div>{item.name}</div>
                    <div>{item.score}</div>
                    <div>
                        <img
                            class="trades-chart"
                            src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item.marketId}.svg`}
                        >
                        </img>
                    </div>


                    {/* <a class="btn_border-wrap btn_border" >
                          <span>Торговать</span>
                        </a> */}
                </div>
                <div class="btn_border-wrap mY-auto h100">
                <a href={item.url} onclick={Fn.link}>
                    <button class="btn_border bgMW">
                        Торговать
                    </button>
                </a>
            </div>
            </div>
         
        </div>
    )
}