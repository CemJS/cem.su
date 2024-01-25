import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import donation from "@images/donation.png";
import background from "@images/contactsBg.png";

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
        <p class={["contacts__form-error", !Static.form.name.err ? "hide" : null]}>{Static.form.name.err}</p>
        <div class="contacts__form-wrapper">
          <i class="i i-user contacts__form-icon"></i>
          <input
            oninput={(e) => {
              Static.form.name.value = e.target.value;
              Func.checkName();
              Func.checkForm();
            }}
            id="name"
            type="text"
            placeholder="Введите ваше имя"
            class={["contacts__form-input", Static.form.name.err ? "contacts__form-input_error" : null, Static.form.name.valid ? "contacts__form-input_success" : null]}
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
        <p class={["contacts__form-error", !Static.form.email.err ? "hide" : null]}>{Static.form.email.err}</p>
        <div class="contacts__form-wrapper">
          <i class="i i-messanger contacts__form-icon"></i>
          <input
            oninput={(e) => {
              Static.form.email.value = e.target.value;
              Func.checkEmail();
              Func.checkForm();
            }}
            id="email"
            type="email"
            placeholder="Введите ваш E-mail"
            class={["contacts__form-input", Static.form.email.err ? "contacts__form-input_error" : null, Static.form.email.valid ? "contacts__form-input_success" : null]}
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
        <p class={["contacts__form-error", !Static.form.message.err ? "hide" : null]}>{Static.form.message.err}</p>
        <textarea
          id="message"
          oninput={(e) => {
            Static.form.message.value = e.target.value;
            Func.checkMessage();
            Func.checkForm();
          }}
          placeholder="Введите ваше сообщение"
          class={["contacts__form-input textarea", Static.form.message.err ? "contacts__form-input_error" : null, Static.form.message.valid ? "contacts__form-input_success" : null]}
        ></textarea>
      </div>
      <button class={["btn contacts__form-btn", Static.form.isValid ? "contacts__form-btn_active" : null]}>Отправить</button>
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
        <div class="contacts contacts_margin">
          <RenderForm />
          <RenderDestination />
        </div>
        <div class="help__wrapper">
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
      <div class="contacts_bg">
        <img
          src={background}
          alt="Задний фон"
        />
      </div>
    </div>
  );
}
