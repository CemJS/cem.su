import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import donation from "@images/donation.png";

const RenderForm = () => {
  return (
    <form class="contacts__form">
      <h4 class="contacts__form-title">Обратная связь</h4>
      <p class="contacts__form-subtitle mb-26">Напишите нам, и мы с вами свяжемся!</p>
      <div class="contacts__form-group">
        <div class={["modalWindow_field", Static.form.name.valid || Static.form.name.error ? "modalWindow_field__valid" : null]}>
          <input
            value={Static.form.name.value}
            disabled={front.Variable.Auth ? "disabled" : null}
            oninput={(e) => {
              Static.form.name.value = e.target.value;
              front.Services.functions.formName(Static.form.name);
              Func.checkForm();
            }}
            class={[Static.form.name.error ? "contacts__form-input_error" : null, Static.form.name.valid ? "contacts__form-input_success" : null]}
            type="text"
          />
          <div class="modalWindow_field_labelLine contacts__form-labelLine">
            <i class="i i-user contacts__form-icon"></i>
            <span>Имя*</span>
          </div>
          <div
            style="color:#E84142"
            class="modalWindow_field__status"
          >
            {Static.form.name.error}
          </div>
        </div>
      </div>
      <div class="contacts__form-group">
        <div class={["modalWindow_field", Static.form.email.valid || Static.form.email.error ? "modalWindow_field__valid" : null]}>
          <input
            value={Static.form.email.value}
            disabled={front.Variable.Auth ? "disabled" : null}
            oninput={(e) => {
              Static.form.email.value = e.target.value;
              front.Services.functions.formEmail(Static.form.email);
              Func.checkForm();
            }}
            class={[Static.form.email.error ? "contacts__form-input_error" : null, Static.form.email.valid ? "contacts__form-input_success" : null]}
            type="text"
          />
          <div class="modalWindow_field_labelLine contacts__form-labelLine">
            <i class="i i-messanger contacts__form-icon"></i>
            <span>Email*</span>
          </div>
          <div
            style="color:#E84142"
            class="modalWindow_field__status"
          >
            {Static.form.email.error}
          </div>
        </div>
      </div>
      <div class="contacts__form-group">
        <div class={["modalWindow_field", Static.form.telegram.valid || Static.form.telegram.error ? "modalWindow_field__valid" : null]}>
          <input
            value={Static.form.telegram.value}
            oninput={(e) => {
              Static.form.telegram.value = e.target.value;
              front.Services.functions.formTelegram(Static.form.telegram);
              Func.checkForm();
            }}
            class={[Static.form.telegram.error ? "contacts__form-input_error" : null, Static.form.telegram.valid ? "contacts__form-input_success" : null]}
            type="text"
          />
          <div class="modalWindow_field_labelLine contacts__form-labelLine">
            <i class="i i-user contacts__form-icon"></i>
            <span>Телеграм</span>
          </div>
          <div
            style="color:#E84142"
            class="modalWindow_field__status"
          >
            {Static.form.telegram.error}
          </div>
        </div>
      </div>
      <div class="contacts__form-group">
        <div class={["modalWindow_field textarea", Static.form.comment.valid || Static.form.comment.error ? "modalWindow_field__valid" : null]}>
          <textarea
            value={Static.form.comment.value}
            oninput={(e) => {
              Static.form.comment.value = e.target.value;
              front.Services.functions.formComment(Static.form.comment);
              Func.checkForm();
            }}
            placeholder="Введите ваше сообщение*"
            class={["contacts__form-input textarea", Static.form.comment.error ? "contacts__form-input_error" : null, Static.form.comment.valid ? "contacts__form-input_success" : null]}
            type="text"
          />
          <div
            style="color:#E84142"
            class="modalWindow_field__status"
          >
            {Static.form.comment.error}
          </div>
        </div>
      </div>
      <button
        onclick={(e) => {
          e.preventDefault();
          Func.sendForm();
        }}
        class={["btn contacts__form-btn", Static.form.isValid ? "contacts__form-btn_active" : null]}
      >
        Отправить
      </button>
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
          href="mailto:support@crypto-emergency.com"
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
    <div class="page page_contacts">
      <div class="wrapper wrapper_padding">
        <div class="contacts contacts_margin">
          <RenderForm />
          <RenderDestination />
        </div>
        {/* <div class="help__wrapper">
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
        </div> */}
      </div>
    </div>
  );
}
