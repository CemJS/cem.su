import { Cemjsx, front, Fn, Static, Func } from "cemjs-all"

export default function () {

    return (
        <div>
            <div>Безопасность</div>
            <div>Изменить пароль</div>

            <div class="modalWindow_field">
                <input
                    type="password"
                    required
                    oninput={(e: any) => {
                        Static.form.change_pass.pass.value = e.target.value;
                        Static.form.change_pass.error = false
                        front.Services.functions.formPassword(Static.form.change_pass.pass)
                        Func.checkForm("change_pass")
                    }} />
                <div class="modalWindow_field_labelLine">
                    <i class="i i-user"></i>
                    <span>{Static.form.change_pass.pass.placeholder}</span>
                </div>
                <p class="modalWindow_field__status" style="color:#E84142">{Static.form.change_pass.pass.error}</p>
            </div>

            <div class="modalWindow_field">
                <input
                    type="password"
                    required
                    oninput={(e: any) => {
                        Static.form.change_pass.new_pass.value = e.target.value;
                        Static.form.change_pass.error = false
                        front.Services.functions.formPassword(Static.form.change_pass.new_pass)
                        Func.checkForm("change_pass")
                    }} />
                <div class="modalWindow_field_labelLine">
                    <i class="i i-user"></i>
                    <span>{Static.form.change_pass.new_pass.placeholder}</span>
                </div>
                <p class="modalWindow_field__status" style="color:#E84142">{Static.form.change_pass.new_pass.error}</p>
            </div>

            <button
                class={[
                    "btn", "w100",
                    Static.form.change_pass.isValid ? null : "btn_passive"
                ]}
                onclick={async () => {
                    if (!Static.form.change_pass.isValid) return

                    let answer = await front.Services.functions.sendApi(`/api/MyInfo`, {
                        action: "changePassword",
                        password: Static.form.change_pass.pass.value,
                        newPassword: Static.form.change_pass.new_pass.value
                    })

                    if (answer.error) {
                        Static.form.change_pass.isValid = false
                        Static.form.change_pass.error = "Неверно введены данные!"
                        alert(answer.error)
                        return
                    }
                }}>
                Сменить пароль
            </button>


            <div>Вы можете удалить свой профиль</div>


            <div>
                {
                    front.Variable.myInfo?.deleteDate
                        ?
                        <div>Профиль будет удален: {front.Services.functions.timeStampToDate(front.Variable.myInfo?.deleteDate, ".")}

                            <button
                                class={["btn", "w100"]}
                                onclick={async () => {

                                    let answer = await front.Services.functions.sendApi(`/api/MyInfo`, { action: "recoverAccount" })

                                    if (answer.error) {
                                        alert(answer.error)
                                        return
                                    }
                                }}>Востановить профиль        </button>
                        </div>
                        :

                        <div>

                            <button
                                class={["btn", "w100"]}
                                onclick={async () => {
                                    let answer = await front.Services.functions.sendApi(`/api/MyInfo`, { action: "deleteAccount" })

                                    if (answer.error) {
                                        alert(answer.error)
                                        return
                                    }
                                }}>Удалить профиль</button>
                        </div>

                }

            </div>
            {/* <button
                class={["btn", "w100"]}
                onclick={async () => {
                    let data = { action: "deleteAccount" }
                    if (front.Variable.myInfo?.deleteDate) {
                        data.action = "deleteAccount222222222"
                    }
                    let answer = await front.Services.functions.sendApi(`/api/myInfo`, data)

                    if (answer.error) {
                        alert(answer.error)
                        return
                    }
                }}>
                {
                    front.Variable.myInfo?.deleteDate
                        ?
                        "Востановить профиль"
                        :
                        "Удалить профиль"

                }
            </button> */}


        </div>
    )
}