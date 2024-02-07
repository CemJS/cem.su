import { Cemjsx, Static, Fn, front } from "cemjs-all"

const HeaderBack = function ({ title }) {
  return (
    <div class="back">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
            onclick={() => {
              Static.record = null
              Fn.linkChange("/news")
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
    <div>
      <HeaderBack title={Static.record?.title} />
      <div class="mt-50 new">
        <h1 class="new-title">{Static.record?.title}</h1>

        <div class="new-content">
          <div class="new-img">
            <img
              src={`/assets/upload/news/${Static.record?.image}`}
              alt={Static.record?.title}
            />
          </div>
          <p class="new-preview">{Static.record?.preview}</p>
          <div
            class="new-content__text"
            init={($el) => {
              // this.Services.functions.editText(Static.record?.text, $el)
              this.Services.functions.searchLink(Static.record?.text, $el)
            }}
          ></div>
        </div>

        <div class="new-statistic mt-15">
          <div class="new-statistic__el">
            <i class="i i-comment"></i>
            {Static.record?.statistic?.comments}</div>
          <div class="new-statistic__el">
            <i class="i i-eye"></i>
            {/* {Static.record.statistic?.rating} */}
          </div>
          <div class="new-statistic__el">
            {/* <i class="i i-calendar"></i> */}
            {front.Services.functions.timeStampToDate(Static.record?.dateCreate, '.')}
          </div>
        </div>
      </div>
    </div>
  )
}