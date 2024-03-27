import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.add('modal__active');
        front.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.remove('modal__active');
    setTimeout(() => {
        Fn.clearData()
        front.Variable.$el.body.style.overflow = 'auto';
    }, 500)
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
        return
    }

    Static.waitCode = true
    Static.form.email.disable = true
    Func.timer(60)
    return
}

front.func.checkForm = function () {
    if (Static.currentStep == 1) {

    }
}

front.loader = () => {
    Static.steps = [1, 2, 3]
    Static.currentStep = 1
    Static.widthSlide = 25
    Static.waitCode = false
    Static.time = 60;

    Static.code = new Array(6).fill(null)

    Static.passType = "password"
    //-----------------------

    Static.form = {
        emailOrNickName: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Email или логин",
            view: false,
            disable: false
        },
        pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Новый пароль:",
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