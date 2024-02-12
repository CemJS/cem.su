import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"
import success from "@svg/icons/success.svg";

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
    Fn.log('=login=', Static.form.email.valid)
    Fn.log('=pass=', Static.form.pass.valid)
    if (Static.form.email.valid && Static.form.pass.valid) {
        Static.form.isValid = true

        let answer = await front.Services.functions.sendApi(`/api/Auth`, {
            email: Static.form.email.value,
            password: Static.form.pass.value
        })

        if (answer.error) {
            Static.form.error = true
            alert("Wrong")
            return
        }
        Fn.log('=139d14=', answer)

        Fn.initOne("alert", {
            icon: success,
            title: "Спасибо!",
            text: "Скоро с Вами свяжется наш менеджер!",
        });

        // Fn.log('=762c9b=', front.Variable.myInfo)
        Func.close()
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