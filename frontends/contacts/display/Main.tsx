import { Cemjsx } from "cemjs-all";
import user from "@svg/icons/user.svg";
import message from "@svg/icons/message.svg";

export default function () {
  return (
    <div class="contacts page">
      <div class="wrapper">
        <div class="contacts__wrapper">
          <form class="contacts__form">
            <h4 class="contacts__form-title">Связь с нами</h4>
            <p class="contacts__form-subtitle">Напишите нам, и мы с вами свяжемся!</p>
            <div class="contacts__form-group">
              <label
                for="name"
                class="contacts__form-label"
              >
                Имя
              </label>
              <div class="contacts__form-wrapper">
                <img
                  src={user}
                  alt=""
                  class="contacts__form-icon"
                />
                <input
                  id="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  class="contacts__form-input"
                />
              </div>
            </div>
            <div class="contacts__form-group">
              <label
                for="email"
                class="contacts__form-label"
              >
                E-mail
              </label>
              <div class="contacts__form-wrapper">
                <img
                  src={message}
                  alt=""
                  class="contacts__form-icon"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Введите ваш E-mail"
                  class="contacts__form-input"
                />
              </div>
            </div>
            <div class="contacts__form-group">
              <label
                for="message"
                class="contacts__form-label"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                placeholder="Введите ваше сообщение"
                class="contacts__form-input textarea"
              ></textarea>
            </div>
            <button class="btn">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
