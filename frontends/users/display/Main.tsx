import { Cemjsx, Fn, Static, front } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import resetFilters from "@svg/users/reset_filter.svg"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"

function debounce(func: any, delay: number) {
  let timeoutId: any
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

let checkBox = {
  basic: true,
  expert: true,
  creator: true

}
export default function () {
  // Fn.log('=d77b33=',Static.records)
  let answer: any = []
  let value: any = ""

  return (
    <div class="users">
      <div class="wrapper">
        <div class="users__container">
          <h1>Пользователи</h1>
          <div class="users__filter">

            <div class="users__search">
              <input
                type="text"
                placeholder="Найти друзей"
                oninput={debounce(async (e: any) => {
                  value = e.target.value.toLocaleLowerCase()
                  if (value.length == 0 || value.length >= 2) {
                    answer = await front.Services.functions.sendApi("/api/events/Users", {
                      "action": "get",
                      "uuid": `${localStorage?.uuid}`,
                      "search": value
                    });
                  }
                }, 400)} />
            </div>

            <div class='users__select'>
              <div class="users__lang" style="padding: 0 10px"
                onclick={() => {
                  this.Fn.initOne({
                    name: "changeLanguage"
                  })
                }}>
                <input
                  type="text"
                  readonly="true"
                  value={this.Static?.lang?.value.length != 0 ? this.Static?.lang?.value : "Язык"} />
              </div>

              <div class="users__lang" style="padding: 0 10px"
                onclick={() => {
                  this.Fn.initOne({
                    name: "modalSelectCountry"
                  })
                }}>
                <input
                  type="text"
                  readonly="true"
                  value={this.Static.country?.value.length != 0 ? this.Static.country?.value : "Страна"} />
              </div>
            </div>

            <div class="users__checkbox">
              <div class="checkbox">
                <input
                  type="checkbox"
                  id="basic"
                  ref="basic"
                  value={checkBox.basic}
                  checked={checkBox.basic}
                  onclick={(e: any) => {
                    checkBox.basic = !checkBox.basic
                    let res = front.Services.functions.sendApi("/api/events/Users", {
                      "action": "get",
                      "role": checkBox,
                      "uuid": `${localStorage?.uuid}`,
                    })
                  }} />
                <label class="checkbox__label" for="basic">Пользователи</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="creator"
                  ref="creator"
                  value={checkBox.creator}
                  checked={checkBox.creator}
                  onclick={(e: any) => {
                    checkBox.creator = !checkBox.creator
                    let res = front.Services.functions.sendApi("/api/events/Users", {
                      "action": "get",
                      "role": checkBox,
                      "uuid": `${localStorage?.uuid}`,
                    })
                  }} />
                <label class="checkbox__label" for="creator">Создатели контента</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="expert"
                  ref="expert"
                  value={checkBox.expert}
                  checked={checkBox.expert}
                  onclick={(e: any) => {
                    checkBox.expert = !checkBox.expert
                    let res = front.Services.functions.sendApi("/api/events/Users", {
                      "action": "get",
                      "role": checkBox,
                      "uuid": `${localStorage?.uuid}`,
                    })
                    console.log("static", Static.records);
                  }} />
                <label class="checkbox__label" for="expert">Эксперты</label>
              </div>
              <button class="users__reset_filters"
                onclick={() => {
                  // this.fn("resetFilter")
                }}>
                <img src={resetFilters} width="30" height="30" />
              </button>
            </div>

          </div>

          <div class="users__list">
            {
              this.Static.records?.map((item: any, index: number) => {
                return (
                  <div class="users__item">
                    <div class="users__card-top">
                      <div class="users__item_header">
                        <a class="avatar avatar__users"
                          onclick={async () => {
                            const getUser = {
                              "action": "Get",
                              "id": item?.id,
                              "uuid": `${localStorage?.uuid}`
                            }
                            let userContent = await front.Services.functions.sendApi("/api/events/Users", getUser)
                            //проверка на error
                            Static.contentUser = userContent?.result
                            Fn.linkChange(`/user/${item?.nickname}`)
                          }}>
                          <div class="avatar__icon">
                            <img class="avatar__photo"
                              src={item.avatar?.name
                                ?
                                `/assets/upload/avatar/${item.avatar?.name}`
                                :
                                avatarDefault
                              } />
                            <img class="avatar__frame"
                              src={item.frame?.name && item.frame?.name != "default.svg"
                                ?
                                `/contents/images/lenta/${item.frame?.name}`
                                :
                                frameDefault} />
                            {
                              item.status?.team
                                ?
                                <img class="avatar__team" src={item.status?.team ? teamLogo : null} />
                                :
                                <div>
                                  <div class="avatar__level">
                                    <img src={leveGray} />
                                    <span>{item.statistic.level}</span>
                                  </div>
                                </div>
                            }
                          </div>
                        </a>
                      </div>
                      <div class="users__item_name">
                        <span>{item.nickname}</span>
                        <div class="users__item_status">
                          {item.information.speciality == "" ? "(не указана)" : item.information.speciality}
                        </div>
                      </div>

                    </div>
                    <div class="badge">
                      {item?.awards?.slice(0, 5)?.map((award: any, key: number) => {
                        return (
                          <div class="badge-container">
                            <div class="badge__description">
                              <p>{award?.name}</p>
                              <span>{award?.description}</span>
                            </div>
                            <img src={`contents/svg/personalAwards/${award?.icon}`} />

                          </div>
                        )
                      })}
                    </div>

                    <div class="users__item_statistic">
                      <div class="users__item_info">
                        <span>{item.statistic.answer}</span>
                        <span>ответов</span>
                      </div>
                      <div class="users__item_info">
                        <span>{item.statistic.subscribe}</span>
                        <span>подписчиков</span>
                      </div>
                      <div class="users__item_info">
                        <span>{item.statistic.view}</span>
                        <span>просмотров</span>
                      </div>
                    </div>
                    <div class="users__item_buttons">
                      <button class="users_btn-padding btn btn_gradient mt-10">Написать</button>
                      <button class="users_btn-padding btn btn_gradient mt-10">Подписаться</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}