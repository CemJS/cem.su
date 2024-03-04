import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import previewImg from "@images/careerBg.png";

export default function () {
  return (
    <div class="relative left-[-27.1rem] pt-1 before:absolute before:z-[1]  before:content-['']">
      <div class="jobs__preview-wrapper">
        <div class="jobs__preview-info">
          <h1 class="jobs__preview-title">Карьера в Crypto Emergency</h1>
          <p class="jobs__preview-text">Присоединяйтесь к нашей команде.</p>
        </div>
        <img
          src={previewImg}
          alt="Карьера в Crypto Emergency"
          class="jobs__preview-img"
        />
      </div>
    </div>
  );
}
