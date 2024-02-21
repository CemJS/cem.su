import { Cemjsx, Fn, front } from "cemjs-all"
import Main from "./display/Main"
import Security from "./display/Security"
import Sessions from "./display/Sessions"


const IfPage = function () {
  switch (front.Variable.DataUrl[2]) {
    case "security":
      return <Security />
    case "sessions":
      return <Sessions />
  }
}

export default function () {
  return (
      <div class="settings">
        <div class="settings__container">
          <Main />
          <IfPage />
        </div>
      </div>
  )
}