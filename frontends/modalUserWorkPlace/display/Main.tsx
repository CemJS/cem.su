import { Cemjsx, Static, Fn, Func, front } from "cemjs-all"

const RenderFieldTextarea = function ({ about }) {
    return (
        <div
            class={[
                "modalWindow_field", "mt-15", "modalWindow_field-textarea",
                "modalWindow_field__valid"
            ]}

        >
            <textarea
                rows="3"
                oninput={(e: any) => {
                    about = e.target.value;
                }}
            >{about}</textarea>
        </div>
    )
}

const RenderField = function ({ field, placeholder, className }) {
    return (
        <div class={[
            "modalWindow_field", `${className}`,
            field.length ? "modalWindow_field__valid" : null
        ]}>
            <input
                type="text"
                value={field}
                autocomplete="off"
                oninput={(e: any) => {
                    field = e.target.value;
                }} />
            <div class="modalWindow_field_labelLine">
                <i class="i i-user"></i>
                <span>{placeholder}</span>
            </div>
        </div>
    )
}


export default function () {
    return (
        <main class="modal_main">
            <div class="pY-15">
                <RenderField field={Static.work.title} placeholder="Введите название" className="" />
                <RenderField field={Static.work.period} placeholder="Укажите сроки" className="mt-30" />
                <h3 class="mt-25">Укажите подробности</h3>
                <RenderFieldTextarea about={Static.work.description} />
            </div>
        </main>
    )
}