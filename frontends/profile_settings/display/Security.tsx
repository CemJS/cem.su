import { Cemjsx, front, Fn, Static, Func } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import leveGray from "@svg/lenta/level_gray.svg"

export default function () {
    //     Fn.log('=0b439c=', Static.form.change_pass)
    // Fn.log('isValid', Static.form.change_pass.pass.valid)
    return (
        <div class="profile-settings__body">
            <div class="profile-settings__body_item">
                <div class="profile-settings__body_wrapper">
                    <h2>Пароль</h2>
                    <h3>Изменить пароль</h3>
                    <div class="security-block__input">
                        <label>Старый пароль</label>
                        <span
                            style={Static.form.change_pass?.pass?.error === false ?
                                "display: none" : "display: block; color: #E84142;"}>
                            {Static.form.change_pass?.pass?.error}
                        </span>
                        <div class="security-block__input__div">
                            <img class="icon-input" src={lock} />
                            <input
                                maxlength="16"
                                minlength="8"
                                type={Static.form.change_pass?.pass?.view ? "text" : "password"}
                                style={Static.form.change_pass?.pass?.error === true && Static.form.change_pass?.pass?.value.length > 0 ? "border-color: green" : ""}
                                placeholder={Static.form.change_pass?.pass?.placeholder}
                                oninput={(e: any) => {
                                    Static.form.change_pass.pass.value = e.target.value;
                                    if (Static.form.change_pass?.pass?.value?.length >= 8) {
                                        Static.form.change_pass.pass.valid = true
                                    } else {
                                        Static.form.change_pass.pass.valid = false
                                    }

                                    // front.Services.functions.formPassword(Static.form.change_pass.pass)
                                    Func.checkForm("change_pass")
                                }}
                            />
                            <img class="eye-input" src={Static.form.change_pass?.pass?.view ? eyeSlash : eye}
                                onclick={() => {
                                    Static.form.change_pass.pass.view = !Static.form.change_pass?.pass?.view
                                }} />
                        </div>
                    </div>

                    <div class="security-block__input">
                        <label>Новый пароль</label>
                        <span
                            style={Static.form.change_pass?.new_pass?.error === false ?
                                "display: none" : "display: block; color: #E84142;"}>
                            {Static.form.change_pass?.new_pass?.error}
                        </span>
                        <div class="security-block__input__div">
                            <img class="icon-input" src={lock} />
                            <input
                                maxlength="16"
                                minlength="8"
                                type={Static.form.change_pass?.new_pass?.view ? "text" : "password"}
                                style={Static.form.change_pass?.new_pass?.error == 'Слишком легкий пароль' ? "border-color: red" : Static.form.change_pass?.new_pass?.value?.length > 0 ? "border-color: green" : null}
                                placeholder={Static.form.change_pass?.new_pass?.placeholder}
                                oninput={(e: any) => {
                                    Static.form.change_pass.new_pass.value = e.target.value;
                                    Static.form.change_pass.error = false
                                    front.Services.functions.formPassword(Static.form.change_pass.new_pass)
                                    Func.checkForm("change_pass")
                                }} />
                            <img class="eye-input" src={Static.form.change_pass?.new_pass?.view ? eyeSlash : eye}
                                onclick={() => {
                                    Static.form.change_pass.new_pass.view = !Static.form.change_pass?.new_pass?.view
                                }} />
                        </div>
                    </div>

                    <button class={Static.form.change_pass?.isValid === true ? "security-block__button" :
                        "security-block__button security-block__button_inactive"}
                        onclick={async () => {
                            // console.log("1`23");

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
                <div class="profile-settings__body_wrapper">
                    <p>Вы можете удалить свой профиль</p>
                    <div class="profile-settings__delete_user">
                        <button class="security-block__button"
                            onclick={async () => {
                                let answer = await front.Services.functions.sendApi(`/api/MyInfo`, { action: "deleteAccount" })

                                if (answer.error) {
                                    alert(answer.error)
                                    return
                                }
                            }}>
                            <span>удалить профиль</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}