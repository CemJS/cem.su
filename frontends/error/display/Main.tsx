import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import error from "@svg/icons/error.svg";

const RenderTestButtons = () => {
  return (
    <div>
      {/* модалка редактирования  -> передаем object "information" о пользователе */}
      <button
        class="btn"
        onclick={() =>
          Fn.initOne("modalUserAbout", {
            fullName: "Anna Shalbuzova",
            country: {
              code: "ru",
              engName: "Russia",
              origName: "Россия",
            },
            information: {
              status: "Crypto Emergency",
              dateCreate: 1707399218922,
              birthday: 1707399218922,
              city: "Novorossiysk",
              speciality: "Работаю в удовольствие в веб индустрии!",
              about: "Annyshka topchik",
            },
          })
        }
      >
        Модалка редактирования "Обо мне"
      </button>
      {/* модалка редактирования  -> передаем object "interest" о пользователе */}
      <button
        class="btn"
        onclick={() =>
          Fn.initOne("modalUserInterests", {
            interest: {
              title: "Спорт",
              description:
                "Люблю бегать по вечерам, утром для меня это непосильно ^_^",
            },
          })
        }
      >
        Модалка редактирования "Мои интересы"
      </button>
      {/* модалка редактирования  -> передаем object "workItem" о пользователе */}
      <button
        class="btn"
        onclick={() =>
          Fn.initOne("modalUserWorkPlace", {
            work: {
              title: "Спорт",
              description:
                "Люблю бегать по вечерам, утром для меня это непосильно ^_^",
              period: "2021-2022",
            },
          })
        }
      >
        Модалка редактирования "Мои места работа"
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            action: "setQuestion",
            data: {
              _id: "64858303ebf324b822f56bff",
              value: {
                bestId: "6485d94cebf324b822291306",
              },
            },
          });
        }}
      >
        Выбрать ответ на вопрос лучшим
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            action: "setQuestion",
            data: {
              _id: "65d21222e3e55484e96ec79a",
              value: {
                complain: ["poison"],
              },
            },
          });
        }}
      >
        Пожаловаться на вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            action: "setQuestion",
            data: {
              _id: "65d21222e3e55484e96ec79a",
              value: {
                complain: ["poison"],
              },
            },
          });
        }}
      >
        Пожаловаться на вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Questions", {
            action: "setPost",
            data: {
              _id: "65d21222e3e55484e96ec79a",
              value: {
                languages: "ru",
                media: [
                  {
                    aspect: 1.7777777777777777,
                    type: "image",
                    name: "efe8258b61ac29dda43ed8656b0dcec3.png",
                  },
                  {
                    type: "video",
                    name: "61d00857285f2cda73d5ad860ea99b4f.mp4",
                  },
                ],
                text: "Test",
                title: "Hello 2!",
              },
            },
          });
        }}
      >
        Редактировать вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswer",
            data: {
              value: {
                media: [
                  {
                    aspect: 1.7777777777777777,
                    type: "image",
                    name: "6781f16af92080b43ce021cc496b912d.png",
                  },
                ],
                questionId: "63cfadf58c3f9047b2b2d807",
                text: "Hello",
              },
            },
          });
        }}
      >
        Предложить ответ на вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswers",
            data: {
              _id: "65d32b29e3e55484e9c50303",
              value: {
                evaluation: "plus",
              },
            },
          });
        }}
      >
        Лайк ответ на вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswers",
            data: {
              _id: "65d32b29e3e55484e9c50303",
              value: {
                evaluation: "minus",
              },
            },
          });
        }}
      >
        Дизлайк ответ на вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswers",
            data: {
              _id: "646858c2b9c98a67df4b4020",
              value: {
                complain: ["malicious"],
              },
            },
          });
        }}
      >
        Пожаловаться на ответ
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswers",
            data: {
              _id: "65d32b29e3e55484e9c50303",
              value: {
                active: false,
              },
            },
          });
        }}
      >
        Удалить ответ на вопрос
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswers",
            data: {
              _id: "642ab00a406a0934b238279e",
              value: {
                comments: {
                  text: "Nice",
                },
              },
            },
          });
        }}
      >
        Комментарий на ответ
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Answer", {
            action: "setAnswers",
            data: {
              _id: "642ab00a406a0934b238279e",
              value: {
                comments: {
                  _id: "65d32c14e3e55484e9c5f95a",
                  comments: {
                    text: "Betarost, Very Nice",
                  },
                },
              },
            },
          });
        }}
      >
        Комментарий на Комментарий
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Posts", {
            action: "setPost",
            data: {
              value: {
                text: "Hello Test",
                forFriends: false,
                languages: "cn",
                media: [
                  {
                    originalImage: {},
                    aspect: 1,
                    type: "image",
                    name: "08097a0724163b6f37ec86fa36caa6fc.png",
                  },
                  {
                    type: "video",
                    name: "61d00857285f2cda73d5ad860ea99b4f.mp4",
                  },
                  {
                    type: "audio",
                    name: "bfc1c4e764e83124e5562f7bb4da1f81.mp3",
                  },
                ],
              },
            },
          });
        }}
      >
        Создать пост
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Posts", {
            action: "setPost",
            data: {
              _id: "65d32cd3e3e55484e9c64b01",
              value: {
                evaluation: "plus",
              },
            },
          });
        }}
      >
        Лайк на пост
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Posts", {
            action: "setPost",
            data: {
              _id: "65d327a5e3e55484e9bfe202",
              value: {
                complain: ["obscene"],
              },
            },
          });
        }}
      >
        Пожаловаться на пост
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Posts", {
            action: "setPost",
            data: {
              _id: "65d32cd3e3e55484e9c64b01",
              value: {
                comments: {
                  text: "А",
                },
              },
            },
          });
        }}
      >
        Комментарий на пост
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Posts", {
            action: "setPost",
            data: {
              _id: "65d32cd3e3e55484e9c64b01",
              value: {
                text: "Hello Test!",
                forFriends: false,
                languages: "cn",
                media: [
                  {
                    type: "image",
                    name: "08097a0724163b6f37ec86fa36caa6fc.png",
                    active: true,
                    aspect: 1,
                    _id: "65d32cd3e3e55484e9c64b04",
                    dateCreate: "2024-02-19T10:26:27.416Z",
                  },
                  {
                    type: "video",
                    name: "61d00857285f2cda73d5ad860ea99b4f.mp4",
                    active: true,
                    _id: "65d32cd3e3e55484e9c64b05",
                    dateCreate: "2024-02-19T10:26:27.416Z",
                  },
                  {
                    type: "audio",
                    name: "bfc1c4e764e83124e5562f7bb4da1f81.mp3",
                    active: true,
                    _id: "65d32cd3e3e55484e9c64b06",
                    dateCreate: "2024-02-19T10:26:27.416Z",
                  },
                ],
              },
            },
          });
        }}
      >
        Редактировать пост
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/Posts", {
            action: "setPost",
            data: {
              _id: "65d32cd3e3e55484e9c64b01",
              value: {
                active: false,
              },
            },
          });
        }}
      >
        Удалить пост
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                "frame.name": "animate.gif",
              },
            },
          });
        }}
      >
        ЛК изменить рамку
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                "avatar.name": "df11c0f7a59aab12baa4bd35ae877a17.png",
              },
            },
          });
        }}
      >
        ЛК изменить аватар
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                "background.name": "dffdadf89efa632264794fb394d79f1a.png",
              },
            },
          });
        }}
      >
        ЛК изменить фон
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                information: {
                  about: "Программирование - моё хобби...\nРазработчик.",
                  birthday: "1987-05-06",
                },
              },
            },
          });
        }}
      >
        ЛК изменить инфо о бо мне
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                interest: [
                  {
                    title: "Инновационные технологии",
                    description: "Всегда интересно что-то новое =)",
                  },
                ],
              },
            },
          });
        }}
      >
        ЛК мои интересы добавить
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                interest: [
                  {
                    title: "Инновационные технологии",
                    description: "Всегда интересно что-то новое ;-)",
                  },
                ],
              },
              _id: "65d32ffde3e55484e9c98302",
            },
          });
        }}
      >
        ЛК мои интересы редактировать
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                work: [
                  {
                    title: "Crypto Emergency",
                    period: "с 2021 года -",
                    description: "Технический директор",
                  },
                ],
              },
              _id: "62baa930f558ee4424f1f7e3",
            },
          });
        }}
      >
        ЛК мои места работы редактировать / добавить по аналогии
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                gallery: [
                  {
                    type: "image/png",
                    name: "53c1d390753d67be82218c6ea94e60d2.png",
                  },
                ],
              },
            },
          });
        }}
      >
        ЛК Галерея добавить
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                "gallery.active": false,
              },
              filters: {
                "gallery._id": "65d3308fe3e55484e9cabd55",
              },
            },
          });
        }}
      >
        ЛК Галерея удалить
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                social: [
                  {
                    channel: "telegram",
                    description:
                      "Каждый день снабжаем достоверной информацией: #новости , #статьи , #обзоры",
                    name: "Crypto Speech | Поговорим о крипте?",
                    url: "https://t.me/crypto_speech",
                  },
                ],
              },
            },
          });
        }}
      >
        ЛК Соцсети добавить
      </button>
      <button
        class="btn_border mt-10"
        onclick={() => {
          let res = front.Services.functions.sendApi("/api/events/User", {
            action: "setUsers",
            data: {
              value: {
                "social.active": false,
              },
              filters: {
                "social._id": "62c5682525cadc25df4c8ac2",
              },
            },
          });
        }}
      >
        ЛК Соцсети удалить
      </button>
    </div>
  );
};

export default function () {
  return (
    <div class="mx-auto flex w-full max-w-[44.875rem] flex-col items-center justify-center gap-[1.5625rem] p-[4.25rem_0.5rem_13.625rem] sm:p-[4.25rem_7.625rem_12.25rem_7.625rem]">
      {/* <p class="error_text">Страница не найдена</p> */}
      {/* <p class="">Страница не найдена</p> */}
      <p class="mb-12 text-center text-[clamp(2.5rem,2vw,3.75rem)] font-semibold leading-[3rem] [text-shadow:0.125rem_0.625rem_0.625rem_#000]">
        Страница не найдена
      </p>
      <img
        src={error}
        alt="Ошибка"
        class="w-4/5 max-w-[400px] [text-shadow:0.125rem_0.625rem_0.625rem_#000] md:w-full"
      />
      <p class="text-center text-[clamp(1rem,_2vw,_1.375rem)] font-semibold leading-7 [text-shadow:0.125rem_0.625rem_0.625rem_#000;]">
        Вернитесь на главную страницу
      </p>
      <div class="btn_border-wrap">
        <button class="btn_border" onclick={() => Fn.linkChange("/")}>
          На главную
        </button>
      </div>

      <button
        class="btn"
        onclick={() => {
          const openDB = indexedDB.open("CryptoEmergency", 1);
          openDB.onupgradeneeded = function () {
            const db = openDB.result;
            if (!db.objectStoreNames.contains("dataUpdate")) {
              db.createObjectStore("dataUpdate", { keyPath: "key" });
            }
          };
          openDB.onsuccess = function () {
            const db = openDB.result;
            const transaction = db.transaction("dataUpdate", "readwrite");
            const store = transaction.objectStore("dataUpdate");
            const getCountry = store.get("country");
            const getLang = store.get("lang");
            const getTranslations = store.get("translations");

            getCountry.onsuccess = async function () {
              if (!getCountry.result) {
                store.add({
                  key: "country",
                  value: front.Variable?.myInfo?.countriesLastUpdateDate,
                });
                let res = await front.Services.functions.sendApi(
                  "/api/countries",
                  {},
                );
              } else if (
                getCountry.result?.value ===
                front.Variable?.myInfo?.countriesLastUpdateDate
              ) {
                store.put({
                  key: "country",
                  value: front.Variable?.myInfo?.countriesLastUpdateDate,
                });
                let res = await front.Services.functions.sendApi(
                  "/api/countries",
                  {},
                );
              } else {
                return;
              }
            };
            getLang.onsuccess = async function () {
              if (!getLang.result) {
                store.add({
                  key: "lang",
                  value: front.Variable?.myInfo?.languagesLastUpdateDate,
                });
                let res = await front.Services.functions.sendApi(
                  "/api/languages",
                  {},
                );
              } else if (
                getLang.result?.value <
                front.Variable?.myInfo?.languagesLastUpdateDate
              ) {
                store.put({
                  key: "lang",
                  value: front.Variable?.myInfo?.languagesLastUpdateDate,
                });
                let res = await front.Services.functions.sendApi(
                  "/api/languages",
                  {},
                );
              }
            };
            getTranslations.onsuccess = async function () {
              if (!getTranslations.result) {
                store.add({
                  key: "translations",
                  value: front.Variable?.myInfo?.translationsLastUpdateDate,
                });
                let res = await front.Services.functions.sendApi(
                  "/api/translations",
                  {},
                );
              } else if (
                getTranslations.result?.value <
                front.Variable?.myInfo?.translationsLastUpdateDate
              ) {
                store.put({
                  key: "translations",
                  value: front.Variable?.myInfo?.translationsLastUpdateDate,
                });
                let res = await front.Services.functions.sendApi(
                  "/api/translations",
                  {},
                );
              }
            };
          };
        }}
      >
        Добавить/обновить в dateUpdate
      </button>
      <button
        class="btn"
        onclick={async () => {
          front.Variable.item =
            await this.Services.functions.indexDBGetCountry();
          console.log("item2323:", front.Variable.item);
        }}
      >
        getCountry
      </button>

      <button
        class="btn"
        onclick={async () => {
          const get = await front.Services.functions.IndexDBgetByOne({
            base: "dataUpdate",
            key: "country",
          });
          console.log("get", get);
        }}
      >
        main test
      </button>

      {/* <button
        class="btn"
        onclick={() => {
          const openDB = indexedDB.open("CryptoEmergency", 1);
          openDB.onupgradeneeded = function () {
            const db = openDB.result;
            if (!db.objectStoreNames.contains("dataUpdate")) {
              db.createObjectStore("dataUpdate", { keyPath: "key" });
            }
          };
          openDB.onsuccess = function () {
            const db = openDB.result;
            const transaction = db.transaction("dataUpdate", "readwrite");
            const store = transaction.objectStore("dataUpdate");
            const getRequest = store.get("lang");

            getRequest.onsuccess = function () {
              if (!getRequest.result) {
                store.add({
                  key: "lang",
                  value: front.Variable?.myInfo?.languagesLastUpdateDate,
                });
              } else {
                store.put({
                  key: "lang",
                  value: front.Variable?.myInfo?.languagesLastUpdateDate,
                });
              }
            };
                        // transaction.oncomplete = function () {
            //   console.log(
            //     "Transaction completed: database modification finished.",
            //   );
            // };
            // transaction.onerror = function () {
            //   console.error(
            //     "Transaction not opened due to error. Duplicate items not allowed.",
            //   );
            // };

          };
        }}
      >
        Добавить в dateUpdate язык
      </button>
      <button
        class="btn"
        onclick={() => {
          const openDB = indexedDB.open("CryptoEmergency", 1);
          openDB.onupgradeneeded = function () {
            const db = openDB.result;
            if (!db.objectStoreNames.contains("dataUpdate")) {
              db.createObjectStore("dataUpdate", { keyPath: "key" });
            }
          };
          openDB.onsuccess = function () {
            const db = openDB.result;
            const transaction = db.transaction("dataUpdate", "readwrite");
            const store = transaction.objectStore("dataUpdate");
            const getRequest = store.get("translations");

            getRequest.onsuccess = function () {
              if (!getRequest.result) {
                store.add({
                  key: "translations",
                  value: front.Variable?.myInfo?.translationsLastUpdateDate,
                });
              } else {
                store.put({
                  key: "translations",
                  value: front.Variable?.myInfo?.translationsLastUpdateDate,
                });
              }
            };
          };
        }}
      >
        Добавить в dateUpdate перевод
      </button>
      <button
        class="btn"
        onClick={async () => {
          const request = window.indexedDB.open("CryptoEmergency", 1);
          request.onerror = function (event) {
            console.log("Error opening DB", event);
          };
          request.onsuccess = function (event: any) {
            let db = request.result;
            let tx = db.transaction("dataUpdate", "readonly");
            let store = tx.objectStore("dataUpdate");

            let req = store.get("country");

            req.onsuccess = function (event) {
              let country = req.result.value;
              console.log(country);
              if(country === front.Variable?.myInfo?.countriesLastUpdateDate){
                req.onsuccess = function () {
                  if (!req.result) {
                    store.add({
                      key: "country",
                      value: front.Variable?.myInfo?.countriesLastUpdateDate,
                    });
                  } else {
                    store.put({
                      key: "country",
                      value: front.Variable?.myInfo?.countriesLastUpdateDate,
                    });
                  }
                };
              } else {
                return
              }
            };

            req.onerror = function (event) {
              console.log("Error getting country", event);
            };
          };
        }}
      >
        Получить страну
      </button> */}

      {/* <RenderTestButtons /> */}
    </div>
  );
}
