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
      <div class="wrapper profile-main__container">
        <div class="profile-main__settings">
          <Main />
          <IfPage />
        </div>
      </div>
  )
}