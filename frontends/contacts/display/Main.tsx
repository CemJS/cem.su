import { Cemjsx, Fn } from "cemjs-all";
import donation from "@images/donation.png";

const RenderForm = () => {
  return (
    <form class="contacts__form">
      <h4 class="contacts__form-title">Связь с нами</h4>
      <p class="contacts__form-subtitle mb-16">Напишите нам, и мы с вами свяжемся!</p>
      <div class="contacts__form-group">
        <label
          for="name"
          class="contacts__form-label"
        >
          Имя
        </label>
        <div class="contacts__form-wrapper">
          <i class="i i-user contacts__form-icon"></i>
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
          <i class="i i-messanger contacts__form-icon"></i>
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
  );
};

const RenderDestination = () => {
  return (
    <div class="contacts__destination">
      <div class="contacts__destination-item">
        <h4 class="contacts__destination-title">Филиал в России:</h4>
        <p class="contacts__destination-text">г. Новороссийск​, ул.Набережная им. Адмирала Серебрякова, 27а, ​4 этаж, офис 39</p>
      </div>
      <div class="contacts__destination-item">
        <h4 class="contacts__destination-title">Адрес:</h4>
        <p class="contacts__destination-text">Business address: Didzioji Str. 14-1, Vilnius, the Republic of Lithuania</p>
      </div>
      <div class="contacts__destination-item">
        <h4 class="contacts__destination-title">E-mail:</h4>
        <a
          onclick={Fn.link}
          href="support@crypto-emergency.com"
          class="contacts__destination-text link"
        >
          support@crypto-emergency.com
        </a>
      </div>
    </div>
  );
};

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <div class="contacts">
          <RenderForm />
          <RenderDestination />
        </div>
        <a
          href="https://www.donationalerts.com/r/crypto_emergency"
          class="help"
          onclick={Fn.link}
        >
          <img
            src={donation}
            alt="Поддержать проект"
            class="help__img"
          />
          <p class="help__text">Поддержать проект</p>
        </a>
      </div>
    </div>
  );
}
