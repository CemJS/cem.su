import { Cemjsx, Static, Func, Ref } from "cemjs-all"

const RenderSearchLanguages = function ({ languages }) {
  return (
    <div class="sidebar-lang__search">
      <div class={[
        "modalWindow_field"
      ]}>
        <input
          type="text"
          required
          autocomplete="off"
          oninput={(e: any) => {
            Func.searchLang(e, languages)
          }}
        />
        <div class="modalWindow_field_labelLine">
          <i class="i i-user"></i>
          <span>Поиск по языкам</span>
        </div>
      </div>
    </div>
  )
}

export default function () {
  return (
    <div class="sidebar-lang">
      <div class="sidebar-header">
        <div
          class="btn btn_dark"
          onclick={() => { Ref.slideSection.style.marginLeft = `0` }}
        >
          <i class="i i-arrow-left"></i> Вернуться в меню
        </div>
        <button class="btn btn_dark" onclick={Func.close}>
          <i class="i i-cancel"></i>
        </button>
      </div>
      <RenderSearchLanguages languages={Static.listLanguages} />
      <div class="sidebar-menu">
        {
          Static.listLanguages.map(item => {
            return (
              <div
                class="sidebar-menu__item-btn"
                onclick={() => {
                  Func.close()
                }}
              >
                {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}