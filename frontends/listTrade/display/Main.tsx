import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function () {

  return (
    <section class="listTrade">
      <div class="wrapper">
        <h1 class="general__title">Список бирж</h1>

        <div class="listTrade___table-wrapper">
          <table class="listTrade__table table">
            <thead class="listTrade__table__head ">
              <tr class="listTrade__table__row">
                <th class="disable-tableName justStart">Название</th>
                <th class="disable-tableName">Рейтинг</th>
                <th class="disable-tableName">График</th>
                <th class="listTrade__table__position-end">
                  <div ref="cex" class="listTrade-btnListTrade tag__button tag__button_active"
                    onclick={(e: any) => {
                      e.target.classList.toggle("tag__button_active");
                      Ref.dex.classList.remove("tag__button_active")
                      let res = front.Services.functions.sendApi("/api/events/Trades", {
                        "action": "get",
                        "category": "CEX",
                        "uuid": `${localStorage?.uuid}`,
                      })
                    }}>CEX</div>
                  <div ref="dex" class="listTrade-btnListTrade tag__button"
                    onclick={(e: any) => {
                      e.target.classList.toggle("tag__button_active");
                      Ref.cex.classList.remove("tag__button_active")
                      let res = front.Services.functions.sendApi("/api/events/Trades", {
                        "action": "get",
                        "category": "DEX",
                        "uuid": `${localStorage?.uuid}`,
                      })
                    }}>DEX</div>
                </th>
              </tr>
            </thead>
            <tbody class="table_body listTrade__table__body">
              {
                Static.records?.map((item: any, index: any) => {
                  return (
                    <tr
                      class="table_row listTrade__table__row"
                      isVisible={() => {
                        if (index == Static.records.length - 3) {
                          // console.log('=индкекс равен =', index, 'Static.records.length - 3', Static.records.length - 3)
                          Static.moreid = Static.records[Static.records.length - 1]._id
                          // fn("addEvent")
                        }
                      }}
                      init={($el: any) => {
                        if (index == Static.records?.length - 1) {
                          const observer = new IntersectionObserver((entries) => {
                            entries.forEach(async entry => {
                              if (entry.isIntersecting) {
                                observer.unobserve($el)
                                console.log("trueeeeeeeeeeee");
                                let res = front.Services.functions.sendApi("/api/events/Trades", {
                                  "action": "skip",
                                  "category": Static.tradeFilter.cat,
                                  "skip": Static.records?.length,
                                  "uuid": `${localStorage?.uuid}`,
                                })
                              }
                            })
                          })
                          observer.observe($el)
                        }
                      }}>

                      <td class="justStart">
                        <img class="crypto_coin_icon"
                          src={`/assets/upload/worldPress/${item?.logo}`}>
                        </img>
                        {item.name}
                      </td>
                      <td class="justStart" style="justify-content: center">{item.score}</td>
                      <td class="table_graph justStart" style="justify-content: center">
                        <img
                          class="trades-chart"
                          src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item.marketId}.svg`}
                        >
                        </img>
                      </td>
                      <td class="listTrade__table__btn">
                        <a class="btn btn_gradient" href={item.url} onclick={Fn.link}>
                          <span>Торговать</span>
                        </a>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}