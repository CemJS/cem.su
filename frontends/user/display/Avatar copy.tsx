import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import defaultIcon from "@svg/profile/frame/defaultIcon.svg";

let parent = null

export default function () {
    console.log("Static.record", Static.record);
    return (

        <div class="c-userpreview__avatar">
            <a href="/user/RitaMo" class="">
                <div class="c-avataricon">
                    <img class="c-avataricon__photo"
                        src="/assets/upload/avatar/0ffd8c99b685460f289e6ccd81912d72.png" />
                    <img class="c-avataricon__frame"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQuMzUgMTM3LjQ3Ij48ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiPjxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSI+PHBhdGggZD0iTTExOC4xMSAyOS43MyA2OC41NyAxLjQ5YTE0LjExIDE0LjExIDAgMCAwLTEyLjYzIDBMNi4zMSAyOS43M0ExMy42NCAxMy42NCAwIDAgMCAwIDQwLjQxdjU2LjY2YTEzLjY1IDEzLjY1IDAgMCAwIDYuMyAxMC42N0w1NS45MiAxMzZhMTQuMTEgMTQuMTEgMCAwIDAgMTIuNiAwbDQ5LjU5LTI4LjI1YTEzLjU2IDEzLjU2IDAgMCAwIDYuMjQtMTAuNjdWNDAuNDFhMTMuNTMgMTMuNTMgMCAwIDAtNi4yNC0xMC42OE0xMDUgODguMTFhOS4zIDkuMyAwIDAgMS00LjI5IDcuMjlsLTM0LjE3IDE5LjI5YTkuNzIgOS43MiAwIDAgMS04LjY3IDBMMjMuNzEgOTUuNGE5LjM1IDkuMzUgMCAwIDEtNC4zNC03LjI5VjQ5LjM2YTkuMzkgOS4zOSAwIDAgMSA0LjM1LTcuM2wzNC4xNi0xOS4yOGE5LjgzIDkuODMgMCAwIDEgOC42OSAwbDM0LjExIDE5LjI4YTkuMzMgOS4zMyAwIDAgMSA0LjI5IDcuM1oiIHN0eWxlPSJmaWxsOiMyYjMwNDAiLz48cGF0aCBkPSJNMTE0LjI3IDkyLjIzYTExLjI0IDExLjI0IDAgMCAxLTUuMjIgOC44Nkw2Ny41IDEyNC41MWExMiAxMiAwIDAgMS0xMC41NiAwbC00MS41OC0yMy40MmExMS4zMSAxMS4zMSAwIDAgMS01LjI4LTguODZ2LTQ3YTExLjMzIDExLjMzIDAgMCAxIDUuMjktOC44NUw1NyAxM2ExMS45MyAxMS45MyAwIDAgMSAxMC41OCAwbDQxLjUyIDIzLjQxYTExLjI1IDExLjI1IDAgMCAxIDUuMjIgOC44NVoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjhweDtzdHJva2U6dXJsKCPQkdC10LfRi9C80Y/QvdC90YvQuV/Qs9GA0LDQtNC40LXQvdGCKSIvPjwvZz48L2c+PC9zdmc+"/>
                        <div>
                            <div class="c-avataricon__level dn">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM0LjIgMjYuODM1YzAgMS4wNy0uNzUzIDIuNC0xLjcxMSAyLjk1M2wtMTMuNjQgNy44MDRjLS45NTcuNTQ0LTIuNTE1LjU0NC0zLjQ3MyAwTDEuNzI4IDI5Ljc4OEMuNzc4IDI5LjIzNSAwIDI3LjkwNSAwIDI2LjgzNXYtMTUuNjdjMC0xLjA3OS43NzktMi40IDEuNzI4LTIuOTUyTDE1LjM4NC40MDhjLjk1OS0uNTQ0IDIuNTE2LS41NDQgMy40NzQgMGwxMy42MyA3LjgwNWMuOTU5LjU1MiAxLjcxMiAxLjg3MyAxLjcxMiAyLjk1MnoiLz48cGF0aCBmaWxsPSIjNEY1QTY4IiBkPSJNMzAuNzk0IDI1LjAzNWMwIC44MzctLjYwOCAxLjg1Ni0xLjM3IDIuMjc5TDE4LjUwOCAzMy4zNGMtLjc2Mi40MjMtMi4wMS40MjMtMi43NzIgMEw0LjgwOCAyNy4zMTRjLS43NjItLjQyMy0xLjM4Ni0xLjQ0Mi0xLjM4Ni0yLjI4VjEyLjk0YzAtLjgyOC42MjQtMS44NTYgMS4zODYtMi4yNzlsMTAuOTI3LTYuMDI2Yy43NjEtLjQyMyAyLjAxOS0uNDIzIDIuNzggMGwxMC45MSA2LjAyNmMuNzYxLjQyMyAxLjM2OSAxLjQ1IDEuMzY5IDIuMjh6Ii8+PC9zdmc+"/>
                                    <span>3</span>
                            </div>
                            <div style="display: none;"
                                class="c-avataricon__status c-avataricon__status--online avatar_user_online">
                            </div>
                            <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline">
                            </div>
                        </div>
                </div>
            </a>
        </div>

    )
}