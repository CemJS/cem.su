import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all";

export default function () {
  return (
    <main id="modal_main">
      <div class="modalVacancy">
        <div
          class={[
            "modalWindow_field",
            Static.form?.name.valid || Static.form?.name.error
              ? "modalWindow_field__valid"
              : null,
          ]}
        >
          <input
            value={Static.form.name.value}
            disabled={front.Variable.Auth ? "disabled" : null}
            oninput={(e: any) => {
              Static.form.name.value = e.target.value;
              front.Services.functions.formName(Static.form.name);
              Func.checkForm();
            }}
            class={[
              Static.form.name.error ? "contacts__form-input_error" : null,
              Static.form.name.valid ? "contacts__form-input_success" : null,
            ]}
            type="text"
          />
          <div class="modalWindow_field_labelLine contacts__form-labelLine">
            <i class="i i-user contacts__form-icon"></i>
            <span>{Static.form.name.placeholder}</span>
          </div>
          <div style="color:#E84142" class="modalWindow_field__status">
            {Static.form.name.error}
          </div>
        </div>
        <div
          class={[
            "modalWindow_field",
            Static.form?.email.valid || Static.form?.email.error
              ? "modalWindow_field__valid"
              : null,
          ]}
        >
          <input
            oninput={(e: any) => {
              Static.form.email.value = e.target.value;
              front.Services.functions.formEmail(Static.form.email);
              Func.checkForm();
            }}
            type="email"
            required
            autocomplete="off"
            value={Static.form.email.value}
            disabled={front.Variable.Auth ? "disabled" : null}
            class={[
              Static.form.email.error ? "contacts__form-input_error" : null,
              Static.form.email.valid ? "contacts__form-input_success" : null,
            ]}
          />
          <div class="modalWindow_field_labelLine">
            <i class="i i-user"></i>
            <span>{Static.form.email.placeholder}</span>
          </div>
          <p class="modalWindow_field__status" style="color:#E84142">
            {Static.form.email.error}
          </p>
        </div>
        <div
          class={[
            "modalWindow_field",
            Static.form.telegram.valid || Static.form.telegram.error
              ? "modalWindow_field__valid"
              : null,
          ]}
        >
          <input
            value={Static.form.telegram.value}
            oninput={(e) => {
              Static.form.telegram.value = e.target.value;
              front.Services.functions.formTelegram(Static.form.telegram);
              Func.checkForm();
            }}
            class={[
              Static.form.telegram.error ? "contacts__form-input_error" : null,
              Static.form.telegram.valid
                ? "contacts__form-input_success"
                : null,
            ]}
            type="text"
          />
          <div class="modalWindow_field_labelLine contacts__form-labelLine">
            <i class="i i-user contacts__form-icon"></i>
            <span>{Static.form.telegram.placeholder}</span>
          </div>
          <div style="color:#E84142" class="modalWindow_field__status">
            {Static.form.telegram.error}
          </div>
        </div>
        <div
          class={[
            "modalWindow_field textarea",
            [
              "modalWindow_field",
              Static.form.comment.valid || Static.form.comment.error
                ? "modalWindow_field__valid"
                : null,
            ],
          ]}
        >
          <textarea
            type="text"
            required
            autocomplete="off"
            value={Static.form.comment.value}
            placeholder={Static.form.comment.placeholder}
            class={[
              Static.form.comment.error ? "contacts__form-input_error" : null,
              Static.form.comment.valid ? "contacts__form-input_success" : null,
            ]}
            oninput={(e: any) => {
              Static.form.comment.value = e.target.value;
              front.Services.functions.formComment(this.Static.form.comment);
              Func.checkForm();
            }}
          />
          <p class="modalWindow_field__status" style="color:#E84142">
            {Static.form.comment.error}
          </p>
        </div>
        <button
          onclick={Func.sendForm}
          class={[
            "modalVacancy__btn btn mx-auto",
            !Static.form.isValid ? "disabled" : null,
          ]}
        >
          {front.Variable?.words?.tools?.send}
        </button>
      </div>
    </main>
  );
}
