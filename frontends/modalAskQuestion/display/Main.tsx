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

            <div class="mt-25">
                <div class={[
                    "modalWindow_field",
                    Static.form.question.value.length ? "modalWindow_field__valid" : null
                ]}>
                    <input
                        type="text"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            Static.form.question.value = e.target.value;
                            // front.Services.functions.formEmail(this.Static.form.email)
                            // Func.checkForm()
                        }} />
                    <div class="modalWindow_field_labelLine">
                        <i class="i i-user"></i>
                        <span>{Static.form.question.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{Static.form.question.error}</p>
                </div>

                <h3 class="mt-15">Комментарий к вопросу</h3>

                <div
                    class={[
                        "modalWindow_field", "mt-15", "modalWindow_field-textarea",
                        Static.form.question.value.length ? "modalWindow_field__valid" : null
                    ]}

                >
                    <textarea
                        rows="3"
                        oninput={(e: any) => {
                            Static.form.comment.value = e.target.value;
                            // front.Services.functions.formComment(Static.form.comment)
                            // Func.checkForm()
                        }}
                    ></textarea>
                </div>
            </div>
        </main>
    )
}