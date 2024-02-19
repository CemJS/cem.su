import { Cemjsx, Fn, front } from "cemjs-all"
import Main from "./display/Main"
import Security from "./display/Security"

export default function () {
  switch (front.Variable.DataUrl[2]) {
    case "security":
      return <Security />
    default:
      return <Main />
  }
}