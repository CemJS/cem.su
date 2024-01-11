import { Cemjsx, Fn, front, Static, Events } from "cemjs-all"

export default function () {
  return (
    <div class="back">
      <div class="wrapper">
        <div class="back-inner">
          <span
            class="back-inner_arrow"
          // onclick={async () => {
          //   let url = front.Services.functions.makeUrlEvent("News", {})
          //   let listener = [
          //     {
          //       type: "add",
          //       fn: ({ data }) => {
          //         // console.log('=8265b8=', "fnfjkgfkjgjk", data)
          //         let json = front.Services.functions.strToJson(data)
          //         if (!json) { return }
          //         Static.records = json
          //       },
          //     }
          //   ]
          //   Events.news = await Fn.event(url, listener)
          //   Fn.linkChange(`/news`)
          // }}
          >
            <i class="i i-left"></i>
          </span>

          <h5 class="back-title">Новости</h5>

          <span
            class="back-ellipsis"
            onclick={() => Fn.initOne("modalTools", {})}
          ></span>
        </div>
      </div>
    </div>
  )
}