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

front.func.checkForm = async function () {
    if (Static.form.email.valid && Static.form.pass.valid) {
        Static.form.isValid = true
    } else {
        Static.form.isValid = false
    }
    return
}


front.loader = () => {
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
        pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Введите пароль:",
            view: false,
            disable: false
        },
        isValid: false,
        error: false
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