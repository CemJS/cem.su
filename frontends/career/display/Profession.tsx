import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import professions from "json/careerProfessions.json";

export default function () {
  return (
    <section class="jobs__professions">
      <h2 class="jobs__title">Выбери свою профессию</h2>
      <div class="jobs__professions-list">
        {professions.map((item, index) => {
          return (
            <div class="jobs__professions-item">
              <div class="jobs__professions-cover">
                <img
                  src={item.img}
                  alt="Профессия"
                />
                <div class="jobs__professions-text">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
