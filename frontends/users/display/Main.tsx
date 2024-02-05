import { Cemjsx, Fn, Static } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import resetFilters from "@svg/users/reset_filter.svg"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"

export default function () {
  Fn.log("Static.records", Static.records)
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
                oninput={(e) => {
                  this.Static.makeFilter.nickname = e.target.value
                  this.fn("addEvent", this.Static.makeFilter)
                }} />
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
                  onclick={(e) => {
                    this.Static.makeFilter.basic = e.target.checked
                    console.log('=b1c2b2=', this.Static.makeFilter.basic)
                    this.fn("addEvent", this.Static.makeFilter)
                  }} />
                <label class="checkbox__label" for="basic">Пользователи</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="creator"
                  ref="creator"
                  onclick={(e) => {
                    this.Static.makeFilter.creator = e.target.checked
                    this.fn("addEvent", this.Static.makeFilter)
                  }} />
                <label class="checkbox__label" for="creator">Создатели контента</label>
              </div>

              <div class="checkbox">
                <input
                  type="checkbox"
                  id="expert"
                  ref="expert"
                  onclick={(e) => {
                    this.Static.makeFilter.expert = e.target.checked
                    this.fn("addEvent", this.Static.makeFilter)
                  }} />
                <label class="checkbox__label" for="expert">Эксперты</label>
              </div>

              <button class="users__reset_filters"
                onclick={() => {
                  this.fn("resetFilter")
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
                        <a class="avatar avatar__users" href="#">
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
                      {item?.awards?.slice(0, 5).map((award: any, key: number) => {
                        console.log('avard', award);

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
                      <button class="users__btn btn btn_gradient">Написать</button>
                      <button class="users__btn btn btn_gradient">Подписаться</button>
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