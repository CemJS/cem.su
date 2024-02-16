import { Cemjsx, Fn, Static, front } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import Filters from "./Filters/Filters"
import defaultGray from "@svg/lenta/defaultGray.svg"

export default function () {
  Fn.log("Static.record", Static.records?.length);
Fn.log('=da967c=')
  return (
    <div class="users users__container">
      <h1>Пользователи</h1>
      <Filters />
      <div class="users__list">
        {
          Static.records?.map((item: any, index: number) => {
            return (
              <div class="users__item"
                init={($el: any) => {
                  if (index == Static.records?.length - 1) {
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(async entry => {
                        if (entry.isIntersecting) {
                          observer.unobserve($el)
                          let res = front.Services.functions.sendApi("/api/Users", {
                            ...Static.makeFilter,
                            "action": "skip",
                            "skip": Static.records?.length,
                          })
                        }
                      })
                    })
                    observer.observe($el)
                  }
                }}>
                <div class="users__card-top">
                  <div class="users__item_header">
                    <a class="avatar avatar__users"
                      onclick={async () => {
                        const getUser = {
                          "action": "Get",
                          "nickname": item?.nickname,
                          "uuid": `${localStorage?.uuid}`
                        }
                        let userContent = await front.Services.functions.sendApi("/api/events/Users/profile", getUser)
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
                          src={item.frame?.name ?
                            `/contents/images/lenta/${item.frame?.name}`
                            :
                            defaultGray} />
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
  )
}