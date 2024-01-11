import { Cemjsx, Static, Fn } from "cemjs-all"

export default function () {
  Static.record = Static.records[0]
  Fn.log("=records news all=", Static.record)
  return (
    <div class="mt-45 new">
      <h2 class="new-title">{Static.record?.title}</h2>
      <div class="new-content">
        <div class="new-img">
          <img
            src={`/assets/upload/news/${Static.record?.image}`}
            alt={Static.record?.title}
          />
        </div>
        <div>{Static.record?.text}</div>
      </div>
    </div>
  )
}