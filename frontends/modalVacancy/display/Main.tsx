import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";

export default function () {
  return (
    <main class="modal_main">
      <div class="modalVacancy">
        <div class={["modalWindow_field", Static.form.nickname.valid || Static.form.nickname.error ? "modalWindow_field__valid" : null]}>
          <input
            value={Static.form.nickname.value}
            disabled
            class={[Static.form.nickname.error ? "contacts__form-input_error" : null, Static.form.nickname.valid ? "contacts__form-input_success" : null]}
            type="text"
          />
          <div class="modalWindow_field_labelLine contacts__form-labelLine">
            <i class="i i-user contacts__form-icon"></i>
            <span>Имя</span>
          </div>
          <div class="modalWindow_field__status">{Static.form.nickname.error}</div>
        </div>
        <div class={["modalWindow_field", Static.form.email.valid || Static.form.email.error ? "modalWindow_field__valid" : null]}>
          <input
            type="email"
            required
            autocomplete="off"
            value={Static.form.email.value}
            disabled
            class={[Static.form.nickname.error ? "contacts__form-input_error" : null, Static.form.nickname.valid ? "contacts__form-input_success" : null]}
          />
          <div class="modalWindow_field_labelLine">
            <i class="i i-user"></i>
            <span>{Static.form.email.placeholder}</span>
          </div>
          <p
            class="modalWindow_field__status"
            style="color:#E84142"
          >
            {Static.form.email.error}
          </p>
        </div>
        <div class={["modalWindow_field textarea", ["modalWindow_field", Static.form.comment.valid || Static.form.comment.error ? "modalWindow_field__valid" : null]]}>
          <textarea
            type="text"
            required
            autocomplete="off"
            value={Static.form.comment.value}
            placeholder={Static.form.comment.placeholder}
            class={[Static.form.comment.error ? "contacts__form-input_error" : null, Static.form.comment.valid ? "contacts__form-input_success" : null]}
            oninput={(e: any) => {
              Static.form.comment.value = e.target.value;
              front.Services.functions.formComment(this.Static.form.comment);
              Func.checkForm();
            }}
          />
          <p
            class="modalWindow_field__status"
            style="color:#E84142"
          >
            {Static.form.comment.error}
          </p>
        </div>
        <button
          onclick={Func.sendForm}
          class={["btn mX-auto", !Static.form.isValid ? "hide" : null]}
        >
          Отправить
        </button>
      </div>
    </main>
  );
}
