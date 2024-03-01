import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import vacancies from "json/career/careerVacancies.json";

export default function () {
  return (
    <section class="jobs__vacancies mb-10">
      {vacancies.map((item) => {
        return (
          <div class="jobs__vacancies-item">
            <div class="jobs__vacancies-top">
              <img
                src={item.img}
                alt={item.title}
                class="jobs__vacancies-img"
              />
              <h2 class="jobs__vacancies-title">{item.title}</h2>
              <p class="jobs__vacancies-status">{item.status}</p>
            </div>
            <p class="jobs__vacancies-experience">
              {item.experience.map((item) => {
                return <p class="jobs__vacancies-text_gray">{item}</p>;
              })}
            </p>
            <p class="jobs__vacancies-texttop">
              {item.textTop.map((item) => {
                return <p class="jobs__vacancies-text">{item}</p>;
              })}
            </p>
            <div class="jobs__vacancies-wrapper">
              <div class="jobs__vacancies-cover">
                <h4 class="jobs__vacancies-subtitle">Обязанности:</h4>
                {item.responsibilities.map((item) => {
                  return <p class="jobs__vacancies-text_gray jobs__vacancies-text_little">{item}</p>;
                })}
              </div>
              <div class="jobs__vacancies-cover">
                <h4 class="jobs__vacancies-subtitle">Обязанности:</h4>
                {item.requirements.map((item) => {
                  return <p class="jobs__vacancies-text_gray jobs__vacancies-text_little">{item}</p>;
                })}
              </div>
            </div>
            <div class="jobs__vacancies-textbottom">
              {item.text.map((item) => {
                return <p class="jobs__vacancies-text">{item}</p>;
              })}
            </div>
            <h4 class="jobs__vacancies-subtitle">Ключевые навыки</h4>
            <div class="jobs__vacancies-skills">
              {item.skills.map((item) => {
                return <p class="jobs__vacancies-skill">{item}</p>;
              })}
            </div>
            <div class="btn_border-wrap mt-20">
              <button
                onclick={() => Fn.initOne("modalVacancy", { title: item.title })}
                class="btn_border"
              >
                Отликнуться
              </button>
            </div>
          </div>
        );
      })}
      <h2 class="jobs__vacancies-title_big jobs__vacancies-title_team">
        Ждем ТЕБЯ
        <br />в нашей
        <br />
        команде!
      </h2>
    </section>
  );
}
