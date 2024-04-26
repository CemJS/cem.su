import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.show = function ($el: HTMLElement) {
    setTimeout(() => {
        $el.classList.remove('opacity-0');
        $el.classList.remove('scale-125');
        front.Variable.$el.body.style.overflow = 'hidden';
    }, 100);
}

front.func.close = function () {
    Ref.modal.classList.add('opacity-0');
    Ref.modal.classList.add('scale-125')
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
        <div class="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)] z-10 transition-all opacity-0 scale-125" ref="modal" init={Func.show}>
            <Navigation />
        </div>
    )
}

export { front }