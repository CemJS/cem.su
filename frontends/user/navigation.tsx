import { Cemjsx, front } from "cemjs-all"
import Main from "./display/Main"


export default function () {
  let param = front.Variable.DataUrl[0] || ""
  switch (param) {
    case 'user':
      return <Main class="c-main"/>
  }
}

