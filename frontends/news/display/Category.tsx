import { Cemjsx, Func, Static, Ref, Events, front, Fn } from "cemjs-all"
import category from '@json/category'

export default function () {
  return (
    <div class="cat">
      {/* <div class="cat-arrow cat-arrow_left">
        <i class="i i-arrow-left"></i>
      </div> */}

      <ul class="cat-tabs">
        <li class="cat-tabs__item">Все</li>

        {
          category.map((item, index) => {
            return (
              <li class="cat-tabs__item">
                {item.name}
              </li>
            )
          })
        }
      </ul>

      {/* <div class="cat-arrow cat-arrow_right">
        <i class="i i-arrow-right"></i>
      </div> */}
    </div>
  )
}