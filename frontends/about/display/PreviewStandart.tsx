import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import lines from "@svg/lines.svg"


export default function () {
  return (
    <div class="c-aboutus__whowe c-whowe" style={`background-image: url(${"/contents/background/71fb4fe9899634886318.jpg"})`}>
      <div class="c-whowe__inner pt--36 ">
        <img class="c-whowe__img" src={lines} />
        <h2 class="indexZ--3 h2About mb--24">Crypto Emergency</h2>
        <p>Объединяем криптоэнтузиастов всего мира на единой многофункциональной платформе Crypto Emergency, которая даст им все необходимые инструменты для общения, обучения, заработка и создания собственного контента.</p>
      </div>
      <div class="c-whowe__bg"></div>
    </div>
  );
}
