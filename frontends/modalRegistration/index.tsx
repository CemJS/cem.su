import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        // this.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    setTimeout(() => {
        Fn.clearData()
        // this.Variable.$el.body.style.overflow = 'auto';
    }, 500)
}

front.func.checkForm = async function () {
    if (Static.currentStep == 1 && !Static.waitCode) {
        if (Static.form.email.valid) {
            Static.form.isValid = true
        } else {
            Static.form.isValid = false
        }
        return
    }

    if (Static.currentStep == 1 && Static.waitCode) {

        if (Static.form.code.valid && Static.form.email.valid) {

            let answer = await front.Services.functions.sendApi(`/api/Register`, { action: "checkCode", email: Static.form.email.value, step: Static.currentStep, code: Static.form.code.value })
            if (answer.error) {
                Static.form.code.error = "Код указан не верно!"
                return
            }
            Static.waitCode = false
            Static.form.isValid = false
            if (Static.setInterval) {
                clearInterval(Number(Static.setInterval))
            }
            Func.clickNext()
            return
        }
        return
    }

    if (Static.currentStep == 2) {
        if (Static.form.nickName.valid && Static.form.mainLang.valid && Static.form.country.valid) {
            Static.form.isValid = true
        } else {
            Static.form.isValid = false
        }
        return
    }

    if (Static.currentStep == 3) {
        if (Static.form.pass.valid && Static.form.rePass.valid) {
            Static.form.isValid = true

            // let data = {
            //     action: "registrated",
            //     email: Static.form.email.value,
            //     code: Static.form.code.value,
            //     nikName: Static.form.nickName,
            //     lang: Static.form.mainLang.value,
            //     country: Static.form.country,
            //     password: Static.form.pass.value
            // }

            // let answer = await front.Services.functions.sendApi(`/api/events/Users?uuid=${front.Variable.myInfo.uuid}`, data)

            // if (answer.error) {
            //     Static.form.email.error = "Пароль не совпадают"
            //     Static.form.rePass.valid = false
            //     return
            // }

            // Func.clickNext()
            return
        } else {
            Static.form.isValid = false
        }
        return
    }
}

front.func.clickNext = function () {
    Ref.slidePage.style.marginLeft = `-${Static.widthSlide * Static.currentStep}%`
    Static.currentStep++;
    Ref.indicator.style.width = `${(Static.currentStep - 1) / (Static.steps.length - 1) * 100}%`
}

front.func.changeEmail = function () {
    Static.form.email.disable = false
    Static.waitCode = false
    Static.form.code.value = ""
}

front.func.sendCode = async function () {
    let answer = await front.Services.functions.sendApi(`/api/Register`, { action: "registration", email: Static.form.email.value, step: Static.currentStep })
    if (answer.error) {
        Static.form.email.error = "Пользователь с таким email уже существует!"
        Static.form.email.valid = false
        // Fn.init()
        return
    }

    Static.waitCode = true
    Static.form.email.disable = true
    Func.timer(60)
    // Func.timer(5)
    // this.init()
    return

}

front.func.timer = function (sec: number) {
    Static.time = sec
    if (Static.setInterval) {
        clearInterval(Number(Static.setInterval))
    }

    Static.setInterval = Number(setInterval(() => {
        Static.time = Static.time - 1
        if (Static.time <= 0) {
            clearInterval(Number(Static.setInterval))
        }
    }, 1000));
}

front.loader = () => {
    Static.steps = [1, 2, 3, 4]
    Static.currentStep = 1
    Static.widthSlide = 25
    Static.waitCode = false
    Static.time = 60;

    Static.code = new Array(6).fill(null)

    Static.passType = "password"
    //-----------------------

    Static.form = {
        email: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email",
            view: false,
            disable: false
        },
        code: {
            value: "",
            valid: false,
            error: false,
            placeholder: "",
            view: false,
            disable: false
        },
        nickName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Логин",
            view: false,
            disable: false
        },
        mainLang: {
            value: "",
            nameOrig: null,
            valid: false,
            error: false,
            placeholder: "Выбрать язык",
            view: false,
            disable: false
        },
        country: {
            value: "",
            nameOrig: null,
            valid: false,
            error: false,
            placeholder: "Выбрать страну",
            view: false,
            disable: false
        },
        pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Пароль:",
            view: false,
            disable: false
        },
        rePass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Подтвердите пароль:",
            view: false,
            disable: false
        },
        isValid: false,
    }
    return
}

front.display = () => {
    return (
        <div class="modal" ref="modal" init={Func.show}>
            <Navigation />
        </div>
    )
}

export { front }