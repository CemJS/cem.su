import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all"


export default function () {
    return (
        <main class="modal_main mt-40 p-relative">
            <span class="form-error p-absolute">{Static.form.error ? Static.form.error : null}</span>

            <div class={[
                "modalWindow_field",
                Static.form.email.value.length ? "modalWindow_field__valid" : null,
                Static.form.email.error ? "modalWindow_field__error" : null,
                Static.form.email.valid ? "modalWindow_field__success" : null,
            ]}>
                <input
                    ref="email"
                    type="email"
                    required
                    autocomplete="off"
                    oninput={(e: any) => {
                        Static.form.email.value = e.target.value;
                        Static.form.error = false
                        front.Services.functions.formEmail(this.Static.form.email)
                        Func.checkForm()
                    }} />
                <div class="modalWindow_field_labelLine">
                    <i class="i i-user"></i>
                    <span>{Static.form.email.placeholder}</span>
                </div>
                <p class="modalWindow_field__status" style="color:#E84142">{Static.form.email.error}</p>
            </div>

            <div
                class={[
                    "modalWindow_field", "mt-25",
                    Static.form.pass.value.length ? "modalWindow_field__valid" : null,
                    Static.form.pass.error ? "modalWindow_field__error" : null,
                    Static.form.pass.valid ? "modalWindow_field__success" : null
                ]}>
                <input
                    ref="pass"
                    type="password"
                    required
                    oninput={(e: any) => {
                        Static.form.pass.value = e.target.value;
                        Static.form.error = false
                        front.Services.functions.formPassword(Static.form.pass)
                        Func.checkForm()
                    }}
                />
                <div class="modalWindow_field_labelLine">
                    <i class="i i-lock"></i>
                    <span>{Static.form.pass.placeholder}</span>
                </div>
                <p class="modalWindow_field__status" style="color:#E84142">{Static.form.pass.error}</p>
            </div>

            <p class="mt-15">При использовании платформы вы соглашаетесь с <a href="/terms-of-service/" class="link" onclick={() => { Fn.link }}>поликикой сайта.</a>
            </p>

            {/* <span class="link" onclick={() => Fn.initOne("modalForgotPassword", {})}>Забыли пароль?</span> */}
        </main>
    )
}