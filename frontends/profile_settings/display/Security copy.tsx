import { Cemjsx, front, Fn, Static, Func } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import leveGray from "@svg/lenta/level_gray.svg"

export default function () {
    Fn.log('=0b439c=', Static.form.change_pass)
    return (
        <div class="settings__body">
            <div class="settings__body_item">
                <div class="settings__body_wrapper">
                    <h2>Пароль</h2>
                    <h3>Изменить пароль</h3>
                    <div class="registration-form__block registration-form__block_password">
                        <label>Старый пароль</label>
                        <span style={Static.form.change_pass?.pass?.error === false ? "display: none" : "display: block"}>Пароль должен содержать минимум 1 специальный символ</span>
                        <div class="registration-form__block_input">
                            <img class="lock" src={lock} />
                            <input
                                type={Static.form.change_pass?.pass?.view ? "text" : "password"}
                                style={Static.form.change_pass?.pass?.error === false ? "border-color: red" : Static.form.change_pass?.pass?.error === true && Static.form.change_pass?.pass?.value.length > 0 ? "border-color: green" : ""}
                                placeholder={Static.form.change_pass?.pass?.placeholder}
                                oninput={(e: any) => {
                                    // Static.form.change_pass.pass.error = e.target.value;

                                    Static.form.change_pass.pass.valid = Static.form.change_pass?.pass?.error

                                    Static.form.change_pass.pass.value = e.target.value

                                    front.func.checkForm()
                                }}
                            />
                            <img class="eye" src={Static.form.change_pass?.pass?.view ? eyeSlash : eye}
                                onclick={() => {
                                    Static.form.change_pass.pass.view = !Static.form.change_pass?.pass?.view
                                }} />
                        </div>
                    </div>

                    <div class="registration-form__block registration-form__block_password">
                        <label>Новый пароль</label>
                        <span style={Static.form.change_pass?.new_pass?.error === false ? "display: block" : "display: none"}>Пароли не сопадают</span>
                        <div class="registration-form__block_input">
                            <img class="lock" src={lock} />
                            <input
                                type={Static.form.change_pass?.new_pass?.view ? "text" : "password"}
                                style={Static.form.change_pass?.new_pass?.error === false ? "border-color: red" : Static.form.change_pass?.new_pass?.error === true && Static.repeatPass?.value.length > 0 ? "border-color: green" : null}
                                placeholder={Static.form.change_pass?.new_pass?.placeholder}
                                oninput={(e: any) => {
                                    Static.form.change_pass.new_pass.value = e.target.value

                                    if (Static.form.change_pass.new_pass.value !== Static.form.change_pass?.pass?.value) {
                                        Static.form.change_pass.new_pass.error = false
                                        Static.form.change_pass.new_pass.valid = false
                                    } else {
                                        Static.form.change_pass.new_pass.error = true
                                        Static.form.change_pass.new_pass.valid = true
                                    }
                                    front.func.checkForm()
                                }} />
                            <img class="eye" src={Static.form.change_pass?.new_pass?.view ? eyeSlash : eye}
                                onclick={() => {
                                    Static.form.change_pass.new_pass.view = !Static.form.change_pass?.new_pass?.view
                                }} />
                        </div>
                    </div>
                    <div class="registration-form__footer">
                        <button class={["button", "button_gradient", "button_auth",
                            !Static.form.change_pass?.isValid ? "button_inactive" : null
                        ]}
                            onclick={async () => {
                                console.log("1`23");
                                
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
                            <span>применить</span>
                        </button>
                    </div>
                </div>
                <div class="settings__body_wrapper">
                    <p>Вы можете удалить свой профиль</p>
                    <div class="settings__delete_user">
                        <button class="button button_gradient">
                            <span>удалить профиль</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}