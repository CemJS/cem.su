import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all"


export default function () {
    return (
        <main class="modal_main">
            <div class={[
                "modalWindow_field",
                Static.form.email.value.length ? "modalWindow_field__valid" : null,
                Static.form.email.error ? "modalWindow_field__error" : null,
                Static.form.email.valid ? "modalWindow_field__success" : null,
                Static.form.email.disable ? "modalWindow_field__disabled" : null
            ]}>
                <input
                    type="email"
                    required
                    autocomplete="off"
                    oninput={(e: any) => {
                        Static.form.email.value = e.target.value;
                        // front.Services.functions.formEmail(this.Static.form.email)
                        Func.checkForm()
                    }} />
                <div class="modalWindow_field_labelLine">
                    <i class="i i-user"></i>
                    <span>{Static.form.email.placeholder}</span>
                </div>
                <p class="modalWindow_field__status" style="color:#E84142">{Static.form.email.error}</p>

                {
                    Static.form.email.disable ?
                        // <img
                        //     class="modalWindow_field__edit"
                        //     src={edit} alt="Редактирование email"
                        //     onclick={() => {
                        //         this.fn("changeEmail")
                        //     }}
                        // /> 
                        <span
                            class="modalWindow_field__edit"
                            onclick={() => {
                                Func.changeEmail()
                            }}
                        >
                            <i class="i i-edit"></i>
                        </span>

                        : null
                }
            </div>
        </main>
    )
}