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
import lineB from '@svg/lines/linesB.svg'
import Table from "./Table"


export default function () {
  return (
    <section class="listExchange effect_lines">
      <div class="wrapper">
        <h1 class="general__title">Список обменных пунктов</h1>

        <div class="listExchange_table_wrapper">
          <Table />
        </div>
      </div>
      {/* <img src={lineB} class="listExchange_lineB"></img> */}
    </section>
  )
}