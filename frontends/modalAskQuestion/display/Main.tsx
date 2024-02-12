import { Cemjsx, Static, Fn, Func, front } from "cemjs-all"


export default function () {
    return (
        <main class="modal_main">
            <button
                class="btn btn_dark"
                onclick={async (e) => {
                    Fn.initOne("modalLanguage", {
                        full: true,
                        callback: (chooseLanguage) => {
                            Static.langQuestion = chooseLanguage.orig_name;
                        },
                    });
                }}
            >
                {Static.langQuestion}<i class="i i-arrow-right"></i>
            </button>

            <div class="mt-15">
                <div class={[
                    "modalWindow_field",
                    Static.form.email.value.length ? "modalWindow_field__valid" : null
                ]}>
                    <input
                        type="email"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.form.email.value = e.target.value;
                            front.Services.functions.formEmail(this.Static.form.email)
                            Func.checkForm()
                        }} />
                    <div class="modalWindow_field_labelLine">
                        <i class="i i-user"></i>
                        <span>{Static.form.email.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{Static.form.email.error}</p>
                </div>
            </div>
        </main>
    )
}