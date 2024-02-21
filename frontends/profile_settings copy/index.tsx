import { Cemjsx, front, Func, Static, Fn } from "cemjs-all"
import Navigation from "./navigation"


front.listener.finish = () => {
    return
}

front.func.test = () => {
    return
}

front.func.checkForm = async function (key: string) {
    switch (key) {
        case "change_pass":
            if (Static.form[key].pass.valid && Static.form[key].new_pass.valid) {
                Static.form[key].isValid = true
            } else {
                Static.form[key].isValid = false
            }
            break;
    }


    return
}

front.loader = () => {

    Static.form = {}
    Static.form.change_pass = {
        pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Старый пароль:",
            view: false,
            disable: false
        },
        new_pass: {
            value: "",
            valid: false,
            error: false,
            placeholder: "Новый пароль:",
            view: false,
            disable: false
        },
        isValid: false,
        error: false
    }
    return
}

front.display = () => {
    if (!front.Variable.Auth) {
        Fn.linkChange("/")
        return (<div></div>)
    }
    return (
        <div class="profile-main">
            <Navigation />
        </div>
    )
}

export { front }