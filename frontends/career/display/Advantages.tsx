import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import advantages from "json/careerAdvantages.json";

export default function () {
  return (
    <section class="jobs__advantages">
      <h2 class="jobs__title">Преимущества</h2>
      <div class="jobs__advantages-list">
        {advantages.map((item) => {
          return (
            <div class="jobs__advantages-item">
              <div class="jobs__advantages-cover mb-29">
                <img
                  src={item.img}
                  alt={item.title}
                  class="jobs__advantages-img"
                />
              </div>
              <h4 class="jobs__advantages-name">{item.title}</h4>
              <p class="jobs__advantages-text">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
