import { Cemjsx, Static, front, Func, Ref, Fn } from "cemjs-all"
import done from '@svg/icons/done.svg'

const RenderSteps = function ({ steps, current }) {
    return (
        <div class="steps">
            {steps.map(item => { return <span class={["steps_circle", item <= current ? "steps_circle__active" : null]}> {item} </span> })}
            <div class="steps_progress">
                <div class="steps_indicator" ref="indicator"></div>
            </div>
        </div>
    )
}

const Step1 = function () {
    return (
        <div class="modalReg_page" ref="slidePage">
            <div class="f-col">
                <h3 class="modalReg_page-title">Подтвердите адрес электронной почты</h3>
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
                            front.Services.functions.formEmail(Static.form.email)
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
            </div>

            {
                this.Static.waitCode ?
                    <div class={[
                        "modalReg-confirmCode",
                        Static.waitCode ? "modalReg-confirmCode__active" : null
                    ]}>
                        <div class="modalReg-code" >
                            {
                                Static.code.map((item: number, index: number) => {
                                    return (
                                        <input
                                            type="number"
                                            class={[
                                                "modalReg-code_input",
                                                Static.form.code.error ? "modalReg-code_input__error" : null
                                            ]}
                                            oninput={(e) => {
                                                if (e.data == null && e.target.value.length > 1) {
                                                    let arr = e.target.value.trim().split("")
                                                    if (arr.length > 6) {
                                                        arr = arr.slice(0, 6)
                                                    }
                                                    let arrElements = e.target.parentElement.children;
                                                    arr.forEach((item, index) => {
                                                        this.Static.code[index] = item
                                                        arrElements[index].value = item
                                                        arrElements[index].focus();
                                                    });
                                                } else {
                                                    e.target.value = e.data
                                                    Static.code[index] = e.target.value
                                                    let arrElements = e.target.parentElement.children;
                                                    if (index < Static.code.length - 1 && Static.code[index] != "") {
                                                        arrElements[index + 1].focus();
                                                    }

                                                    if (index != 0 && Static.code[index] == "") {
                                                        arrElements[index - 1].focus();
                                                    }


                                                }
                                                Static.form.code.value = Number(Static.code.join(""))
                                                front.Services.functions.formCode(Static.form.code)
                                                Func.checkForm()
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>

                        {
                            Static.form.code.error ? <span class="modalReg-code__error">{Static.form.code.error}</span> : null
                        }

                        <div class="modalReg_timer">
                            {
                                Static.time > 0
                                    ?
                                    <div>
                                        <p class="modalReg_timer__text">Запросить новый код подтверждения можно через</p>
                                        <p class="modalReg_timer__text pl_10">{Static.time < 10 ? `0 : 0${Static.time}` : `0 : ${Static.time}`}</p>
                                    </div>
                                    :
                                    <button
                                        class="btn btn_timing"
                                        onclick={() => {
                                            Func.sendCode()
                                            return
                                        }}>
                                        Запросить код снова
                                    </button>
                            }
                        </div>
                    </div> :
                    <div class="d-flex jcc pt-35">
                        <button
                            class={[
                                "btn",
                                // "btn_timing",
                                // Static.form.isValid ? null : "btn_passive",
                                // Static.waitCode ? "btn_hidden" : null
                            ]}
                            onclick={async () => {
                                if (!Static.form.isValid) {
                                    return
                                }

                                Func.sendCode()
                                return

                                // if (answer.error) {
                                //     Static.form.nickName.error = "Логин занят!"
                                //     Static.form.nickName.valid = false
                                // }
                                // Func.clickNext()
                            }}>
                            <span>Получить код подтверждение</span>
                        </button>
                    </div>
            }
        </div>
    )
}

const Step2 = function () {
    return (
        <div class="modalReg_page">
            <div class="modalReg_form">
                <div class="f-col">
                    <h3 class="modalReg_page-title">Заполните информация о себе</h3>
                    <div class={[
                        "modalWindow_field",
                        Static.form.nickName.value.length ? "modalWindow_field__valid" : null,
                        Static.form.nickName.error ? "modalWindow_field__error" : null,
                        Static.form.nickName.valid ? "modalWindow_field__success" : null,
                        Static.form.nickName.disable ? "modalWindow_field__disabled" : null
                    ]}>
                        <input
                            type="text"
                            required
                            autocomplete="off"
                            oninput={async (e: any) => {
                                Static.form.nickName.value = e.target.value;
                                front.Services.functions.formNickName(Static.form.nickName)
                                if (Static.form.nickName.valid) {
                                    if (Static.setTimeout) {
                                        clearTimeout(Number(Static.setTimeout))
                                    }
                                    Static.setTimeout = Number(setTimeout(async () => {

                                        let answer = await front.Services.functions.sendApi(`/api/Register`, { action: "checkNick", step: Static.currentStep, nickname: Static.form.nickName.value })

                                        if (answer.error) {
                                            Static.form.nickName.error = "Логин занят!"
                                            Static.form.nickName.valid = false
                                        }
                                        Func.checkForm()
                                    }, 300));
                                }
                            }} />
                        <div class="modalWindow_field_labelLine">
                            {/* <img src={user}></img> */}
                            <i class="i i-user"></i>
                            <span>{Static.form.nickName.placeholder}</span>
                        </div>
                        <p class="modalWindow_field__status" style="color:#E84142">{Static.form.nickName.error}</p>
                        <div class="modalWindow_field__tooltip">
                            <div
                                class="tooltip"
                                onmouseover={() => {
                                    Ref.tooltipContent.classList.add("tooltip-content__active")
                                }}
                                onmouseleave={() => {
                                    Ref.tooltipContent.classList.remove("tooltip-content__active")
                                }}
                            >
                                <div class="tooltip-content" ref="tooltipContent">
                                    <p class="tooltip-content_text">
                                        Логин не должен начинаться с цифр и спецсимволов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-colEqual-2 modalReg-choose">
                    <div
                        class={[
                            "modalReg-choose_item",
                            Static.form.mainLang.valid ? "modalReg-choose_item__success" : null
                        ]}
                        onclick={() => {
                            Static.form.mainLang.valid = true
                            Static.form.mainLang.value = "ru"
                            Static.form.mainLang.nameOrig = "Русский"
                            // Fn.initOne("modalLanguage", {})
                        }}
                    >
                        <span>
                            {Static.form.mainLang.nameOrig ? Static.form.mainLang.nameOrig : Static.form.mainLang.placeholder}
                        </span>
                        <span class="modalReg-choose_arrow"></span>
                    </div>

                    <div
                        class={[
                            "modalReg-choose_item",
                            Static.form.country.valid ? "modalReg-choose_item__success" : null
                        ]}
                        onclick={() => {
                            Static.form.country.valid = true
                            Static.form.country.value = "ru"
                            Static.form.country.nameOrig = "Россия"
                            // Fn.initOne("modalCountry", {})
                        }}
                    >
                        <span>{Static.form.country.nameOrig ? Static.form.country.nameOrig : Static.form.country.placeholder}</span>
                        <span class="modalReg-choose_arrow"></span>
                    </div>
                </div>

                <div class="f-center modalReg_btns">
                    <button
                        class={[
                            "btn",
                            "btn_timing",
                            Static.form.isValid ? null : "btn_passive"
                        ]}
                        onclick={async () => {
                            // if (!Static.form.isValid) {
                            //     return
                            // }

                            let answer = await front.Services.functions.sendApi(`/api/Register`, { action: "registration", email: Static.form.email.value, step: Static.currentStep })
                            if (answer.error) {
                                alert("Error")
                                return
                            }
                            Func.clickNext()
                            return
                        }}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
    )
}

const Step3 = function () {
    return (
        <div class="modalReg_page">
            <div class="modalReg_form">
                <h3 class="modalReg_page-title">Придумайте пароль</h3>
                <div
                    class={[
                        "modalWindow_field",
                        Static.form.pass.value.length ? "modalWindow_field__valid" : null,
                        Static.form.pass.error ? "modalWindow_field__error" : null,
                        Static.form.pass.valid ? "modalWindow_field__success" : null
                    ]}>
                    <input
                        type="password"
                        required
                        oninput={(e: any) => {
                            Static.form.pass.value = e.target.value;
                            front.Services.functions.formPassword(Static.form.pass)
                            Func.checkForm()
                        }}
                    />
                    <div class="modalWindow_field_labelLine">
                        {/* <img src={lock}></img> */}
                        <i class="i i-lock"></i>
                        <span>{Static.form.pass.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{Static.form.pass.error}</p>
                    <div class="modalWindow_field__tooltip">
                        <div
                            class="tooltip"
                            onmouseover={() => {
                                Ref.tooltipContentPass.classList.add("tooltip-content__active")
                            }}
                            onmouseleave={() => {
                                Ref.tooltipContentPass.classList.remove("tooltip-content__active")
                            }}
                        >
                            <div class="tooltip-content" ref="tooltipContentPass">
                                <p class="tooltip-content_text">
                                    Пароль должен содержать спецсимволы !?&$
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class={[
                        "modalWindow_field",
                        Static.form.rePass.value.length ? "modalWindow_field__valid" : null,
                        Static.form.rePass.error ? "modalWindow_field__error" : null,
                        Static.form.rePass.valid ? "modalWindow_field__success" : null
                    ]}>
                    <input
                        type={Static.passType}
                        required
                        oninput={(e: any) => {
                            Static.form.rePass.value = e.target.value;
                            front.Services.functions.formConfirmPassword(Static.form.pass, Static.form.rePass)
                            Func.checkForm()
                        }}
                    />
                    <div class="modalWindow_field_labelLine">
                        {/* <img src={lock}></img> */}
                        <i class="i i-lock"></i>
                        <span>{Static.form.rePass.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{Static.form.rePass.error}</p>
                    <div class="modalWindow_field__tooltip">
                        <img
                            alt="Показать пароль"
                            class="modalWindow_field__eye"
                            // src={this.Static.passType == "password" ? eye : eyeSlash}
                            onclick={() => {
                                if (Static.passType == "password") {
                                    Static.passType = "text"
                                } else {
                                    Static.passType = "password"
                                }
                            }}
                        />
                    </div>
                </div>
                <div class="f-center modalReg_btns">
                    <button
                        class={[
                            "btn",
                            "btn_timing",
                            Static.form.isValid ? null : "btn_passive"
                        ]}
                        onclick={async () => {
                            // if (!Static.form.isValid) {
                            //     return
                            // }
                            Func.clickNext()
                            return
                        }}>
                        Далее
                    </button>
                </div>
            </div>
        </div>
    )
}

const Step4 = function () {
    return (
        <div class="modalReg_page">
            <div class="modalReg_form">
                <h3 class="modalReg_page-title">Поздравляем, Вы успешно зарегистрированы!</h3>
                <div class="modalReg_success">
                    <img src={done} alt="Пользователь успешно зарегистрирован" />
                </div>
                <div class="f-center modalReg_btns">
                    <button
                        class="btn btn_timing"
                        onclick={() => {
                            // setTimeout(() => {
                            //     this.clearData()
                            // }, 5)
                            Func.close()
                            // Fn.initOne("modalAuth", {})
                        }}
                    >
                        Авторизоваться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function () {
    return (
        <main class="modal_main">
            <RenderSteps steps={Static.steps} current={Static.currentStep} />
            <div class="modalReg">
                <div class="modalReg_line mt-25">
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />
                </div>
            </div>
        </main>
    )
}