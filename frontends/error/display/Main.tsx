import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import error from "@svg/icons/error.svg";

export default function () {
  return (
    <div class="error_wrap">
      <p class="error_text">Страница не найдена</p>
      <img
        src={error}
        alt="Ошибка"
        class="error_title"
      />
      <p class="error_subtitle">Вернитесь на главную страницу</p>
      <div class="btn_border-wrap">
        <button
          class="btn_border"
          onclick={() => Fn.linkChange("/")}
        >
          На главную
        </button>
      </div>

      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            "action": "setQuestions",
            "data": {
              "value": {
                "languages": "ru",
                "media": [
                  {
                    "aspect": 1.7777777777777777,
                    "type": "image",
                    "name": "efe8258b61ac29dda43ed8656b0dcec3.png"
                  },
                  {
                    "type": "video",
                    "name": "61d00857285f2cda73d5ad860ea99b4f.mp4"
                  }
                ],
                "text": "Test",
                "title": "Hello!"
              }
            },
          })
        }}
      >
        Новый вопрос
      </button>

      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            "action": "setQuestions",
            "data": {
              "_id": "65d31dcee3e55484e9b7da1d",
              "value": {
                "active": false
              }
            },
          })
        }}
      >
        Удалить вопрос
      </button>


      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            "action": "setQuestions",
            "data": {
              "_id": "648583e7ebf324b8220b07d9",
              "value": {
                "close": true
              }
            },
          })
        }}
      >
        Закрыть вопрос
      </button>



      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            "action": "setQuestion",

            "data": {
              "_id": "64858303ebf324b822f56bff",
              "value": {
                "bestId": "6485d94cebf324b822291306"
              }
            },
          })
        }}
      >
        Выбрать ответ на вопрос лучшим
      </button>


      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            "action": "setQuestion",
            "data": {
              "_id": "65d21222e3e55484e96ec79a",
              "value": {
                "complain": [
                  "poison"
                ]
              }
            },
          })
        }}
      >
        Пожаловаться на вопрос
      </button>



    </div>
  );
}
