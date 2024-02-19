import { Cemjsx, Fn, front } from "cemjs-all"
import Main from "./display/Main"
import Security from "./display/Security"
import Sessions from "./display/Sessions"

export default function () {
  switch (front.Variable.DataUrl[2]) {
    case "security":
      return <Security />
    case "sessions":
      return <Sessions />
    default:
      return <Main />
  }
}