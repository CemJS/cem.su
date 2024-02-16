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
                                            ref={`code${index + 1}`}
                                            type="number"
                                            class={[
                                                "modalReg-code_input",
                                            ]}
                                            oninput={(e) => {


                                                if (e.data == null && e.target.value.length > 1) {
                                                    let arr = e.target.value.trim().split("")
                                                    if (arr.length > 6) {
                                                        arr = arr.slice(0, 6)
                                                    }
                                                    let arrElements = e.target.parentElement.children;
                                                    arr.forEach((item, index) => {
                                                        Static.code[index] = item
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
                                        <p class="modalReg_timer__text">Запросить новый код подтверждения можно через <span class="pl-10">{Static.time < 10 ? `0 : 0${Static.time}` : `0 : ${Static.time}`}</span></p>
                                        {/* <p class="modalReg_timer__text pl-10"></p> */}
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
                                Static.form.isValid ? null : "btn_passive",
                            ]}
                            onclick={async () => {
                                if (!Static.form.isValid) {
                                    return
                                }

                                Func.sendCode()
                                return
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

                                        let answer = await front.Services.functions.sendApi(`/api/Register`, {
                                            action: "checkNick",
                                            step: Static.currentStep,
                                            nickname: Static.form.nickName.value
                                        })

                                        if (answer.error) {
                                            Static.form.nickName.error = "Логин занят!"
                                            Static.form.nickName.valid = false
                                        }
                                        Func.checkForm()
                                    }, 300));
                                }
                            }} />
                        <div class="modalWindow_field_labelLine">
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
                            "w100",
                            "btn",
                            "btn_dark",
                            "modalReg-choose_item",
                            Static.form.mainLang.valid ? "modalReg-choose_item__success" : null
                        ]}
                        onclick={() => {
                            Fn.initOne("modalLanguage", {
                                full: false,
                                callback: (chooseLang) => {
                                    if (!chooseLang) return

                                    Static.form.mainLang.nameOrig = chooseLang.orig_name
                                    Static.form.mainLang.value = chooseLang.code

                                    front.Services.functions.formLang(Static.form.mainLang)
                                    Func.checkForm()
                                }
                            })
                        }}
                    >
                        <span>
                            {Static.form.mainLang.nameOrig ? Static.form.mainLang.nameOrig : Static.form.mainLang.placeholder}
                        </span>
                        <i class="i i-arrow-right"></i>
                    </div>

                    <div
                        class={[
                            "w100",
                            "btn",
                            "btn_dark",
                            "modalReg-choose_item",
                            Static.form.country.valid ? "modalReg-choose_item__success" : null
                        ]}
                        onclick={() => {
                            Fn.initOne("modalCountry", {
                                callback: (chooseCountry) => {
                                    if (!chooseCountry) return

                                    Static.form.country.nameOrig = chooseCountry.orig_name
                                    Static.form.country.value = chooseCountry.code

                                    front.Services.functions.formCountry(Static.form.country)
                                    Func.checkForm()
                                }
                            })
                        }}
                    >
                        <span>{Static.form.country.nameOrig ? Static.form.country.nameOrig : Static.form.country.placeholder}</span>
                        <i class="i i-arrow-right"></i>
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
                            if (!Static.form.isValid) {
                                return
                            }

                            let answer = await front.Services.functions.sendApi(`/api/Register`, {
                                step: Static.currentStep,
                                lang: Static.form.mainLang.value,
                                country: Static.form.country.value,
                                action: "checkNick",
                                email: Static.form.email.value,
                                nickName: Static.form.nickName.value
                            })
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
                        <i class="i i-lock"></i>
                        <span>{Static.form.rePass.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{Static.form.rePass.error}</p>
                    <div
                        class="modalWindow_field__tooltip"
                        onclick={() => {
                            if (Static.passType == "password") {
                                Static.passType = "text"
                            } else {
                                Static.passType = "password"
                            }
                        }}
                    >
                        <i class="i i-eye"></i>
                        {/* <img
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
                        /> */}
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
                            if (!Static.form.isValid) {
                                return
                            }

                            let answer = await front.Services.functions.sendApi(`/api/Register`, {
                                step: Static.currentStep,
                                email: Static.form.email.value,
                                nickname: Static.form.nickName.value,
                                lang: Static.form.mainLang.value,
                                country: Static.form.country.value,
                                pass: Static.form.pass.value,
                                repass: Static.form.rePass.value,
                            })
                            Fn.log('=a028de=', answer)

                            if (answer.error == "already register") {
                                Static.form.isValid = false
                                Func.clickPrev()
                                front.Services.functions.formNickName(Static.form.nickName)
                                front.Services.functions.formLang(Static.form.mainLang)
                                return
                            }

                            if (answer.error) {
                                Static.form.isValid = false
                                Static.form.error = "Неверные данные"
                                return
                            }

                            Func.clickNext()
                            Fn.log('=b02443=', front.Variable.myInfo)
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
                <h3 class="modalReg_page-title text-center">Поздравляем, Вы успешно зарегистрированы!</h3>
                <div class="modalReg_success">
                    <img src={done} alt="Пользователь успешно зарегистрирован" />
                </div>
                <div class="f-center modalReg_btns">
                    <button
                        class="btn btn_timing"
                        onclick={() => {
                            Func.close()
                        }}
                    >
                        Перейти в личный кабинет
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