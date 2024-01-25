import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import previewImg from "@images/careerBg.png";
import advantages from "json/careerAdvantages.json";

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <div class="jobs">
          <div class="jobs__preview">
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
          <section class="jobs__advantages">
            <h2 class="jobs__advantages-title">Преимущества</h2>
            <div class="jobs__advantages-list">
              {advantages.map((item) => {
                return (
                  <div class="jobs__advantages-item">
                    <img
                      src={item.img}
                      alt={item.title}
                      class="jobs__advantages-img"
                    />
                    <h4 class="jobs__advantages-name">{item.title}</h4>
                    <p class="jobs__advantages-text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
