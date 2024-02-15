import { Cemjsx, Fn, Static } from "cemjs-all";

import logo from "@svg/university/logo.svg";
import test from "@images/university/test.jpeg";
import reviews from "@images/university/reviews.jpeg";
import soon from "@images/university/soon.png";
import Course from "./Course";

export default function () {
  return (
    <div class="university">
      <div class="wrapper">
        <div class="university__container">
          <div class="university__header">
            <div class="university__header_title">
              <img src={logo} />
              <p>Крипто университет</p>
            </div>
            <a
              href="/university/course"
              class="university__header_courses btn btn_gradient"
              onclick={(e) => {
                Static.page = "course";
                Fn.link(e);
              }}
            >
              <span>Все курсы</span>
            </a>
          </div>
          <div class="university__slogan">
            <h3>Откройте новые горизонты с Крипто университетом: образование, инновации, успех!</h3>
          </div>
          <div class="university__category university-category">
            {Static.records?.map((item) => {
              return (
                <a
                  href="/university/course"
                  class="university-category__item"
                  onclick={(e) => {
                    // fn("addEvent", { cat: item.name });
                    Static.categoryCurrent = item.name;
                    // Static.page = "course"
                    Fn.link(e);
                  }}
                >
                  <div class="university-category__item_title">
                    {item.name}
                    <p class="subtitle">{item.title}</p>
                  </div>
                  <img
                    class="university-category__item_image"
                    src={`/assets/upload/worldPress/${item.background}`}
                  />
                  <p class="description">{item.description}</p>
                </a>
              );
            })}
          </div>
          <div class="university__section university-test">
            <div class="university-test__container">
              <div class="university-test__title">Узнай, какая профессия наиболее подходит именно тебе, с помощью нашего теста на профориентацию</div>
              <img
                class="university-test__background"
                src={test}
                alt="Фон."
              />
              <div class="university-test__button">
                <span>Пройти бесплатно</span>
              </div>
              <img
                class="university-test__soon"
                src={soon}
                alt="Скоро."
              />
            </div>
          </div>
          <div class="university__section university-reviews">
            <div class="university-reviews__title">Отзывы</div>
            <p class="university-reviews__soon">
              <span>Отзывы ещё не оставлены</span>
            </p>
            <img
              class="university-reviews__background"
              src={reviews}
              alt="Фон."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
