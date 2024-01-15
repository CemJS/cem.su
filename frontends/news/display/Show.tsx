import { Cemjsx, Static, Fn, front } from "cemjs-all"

export default function () {
  // Fn.log("=news show=", Static.record)
  return (
    <div class="mt-45 new">
      <h1 class="new-title">{Static.record?.title}</h1>

      <div class="new-content">

        <div class="new-img">
          <img
            src={`/assets/upload/news/${Static.record?.image}`}
            alt={Static.record?.title}
          />
        </div>

        <p class="new-preview">{Static.record?.preview}</p>

        {/* <div class="mt-10">{Static.record?.text}</div> */}

        <div
          class="new-content__text"
          init={($el) => {
            // this.Services.functions.editText(Static.record?.text, $el)
            this.Services.functions.searchLink(Static.record?.text, $el)
          }}
        ></div>
      </div>

      <div class="new-statistic">
        <div class="new-statistic__el">
          <i class="i i-comment"></i>
          {Static.record?.statistic?.comments}</div>
        <div class="new-statistic__el">
          <i class="i i-eye"></i>
          {/* {Static.record.statistic?.rating} */}
        </div>
        <div class="new-statistic__el">
          <i class="i i-calendar"></i>
          {front.Services.functions.timeStampToDate(Static.record?.dateCreate, '.')}
        </div>
      </div>

    </div>
  )
}