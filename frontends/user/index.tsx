import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.clickAny = function (e) {
    if (Ref.filterCategoryv && !Ref.filterCategory.contains(e.target) && Static.categoryStatus == 'open') {
        Static.categoryStatus = 'close';
        Ref.filterCategory.classList.remove('filter_item_active');
    }
    return
}

front.loader = async () => {
    Static.notificationShow = false

    const eventsGet = {
        "action": "GetAll",
        "active": true,
        "uuid": `${localStorage?.uuid}`,
        "search": ""
    }

    let events = await front.Services.functions.sendApi("/api/private/events", eventsGet)
    if (events?.error === "Ошибка авторизации.") {
        Fn.linkChange("/login")
      } else {
        Static.events = events?.result
      }

    if (front.Variable.DataUrl[1]) {
        const getEvent = {
            "action": "Get",
            "id": front.Variable.DataUrl[1],
            "uuid": `${localStorage?.uuid}`
        }
        let newContent = await front.Services.functions.sendApi("/api/private/events", getEvent)
        Static.contentEvent = newContent?.result;
    }

    return
}

front.display = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

export { front }