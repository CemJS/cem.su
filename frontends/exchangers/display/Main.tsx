import { Cemjsx, Fn, Static, front } from "cemjs-all"
import btc from '@svg/coins/btc.svg'
import trx from '@svg/coins/trx.svg'
import ada from '@svg/coins/ada.svg'
import bnb from '@svg/coins/bnb.svg'
import doge from '@svg/coins/doge.svg'
import eth from '@svg/coins/eth.svg'
import zrx from '@svg/coins/zrx.svg'
import usdt from '@svg/coins/usdt.svg'
import usd from '@svg/coins/usd.svg'
import mana from '@svg/coins/mana.svg'
import star from '@svg/icon/star.svg'
import prev from '@svg/icon/prev.svg'
import startPrev from '@svg/icon/startPrev.svg'
import next from '@svg/icon/next.svg'
import endNext from '@svg/icon/endNext.svg'
import filter from '@svg/icon/filter.svg'
import lineB from '@svg/lines/linesB.svg'


export default function () {
  return (
    <section class="listExchange effect_lines">
      <div class="wrapper">
        <h1 class="general__title">Список обменных пунктов</h1>

        <div class="listExchange_table_wrapper">
          <table class="listExchange_table table">
            <thead class="listExchange_table_head">
              <tr class="listExchange_table_row">

                <th class="listExchange_table_name disable-tableName">Название</th>
                <th class="listExchange_table_coins disable-tableName">Коины</th>
                <th
                  class="listExchange_table_filter"
                  onclick={() => Fn.initOne("modalFilterExchange", {
                    callback: async (filterCoins) => {
                      Fn.log('=ea10c7=', filterCoins)
                      // filterCoins - список выбранных монет для фильтрации
                    }
                  })}
                >
                  <img src={filter} />
                </th>
              </tr>
            </thead>
            <tbody class="table_body listExchange_table_body">
              {
                Static.records?.map((item: any, index: any) => {
                  return (
                    <tr
                      class="table_row listExchange_table_row"
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
                      }}>

                      <td class="listExchange_table_name">{item.name}</td>
                      <td class="listExchange_table_coins">
                        <div class="coins_wrap">
                          {
                            item.listCoins?.map((el: any, index: number) => {
                              // console.log("el", el);

                              return (
                                <img src={`/contents/coins/${el?.icon}.svg`} class="coins_wrap_item"></img>
                              )
                            })
                          }
                        </div>
                      </td>
                      <td class="listExchange_table_btn">
                        <a class="btn btn_gradient" href={item.url} onclick={Fn.link}>
                          <span>Обменять</span>
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
      {/* <img src={lineB} class="listExchange_lineB"></img> */}
    </section>
  )
}