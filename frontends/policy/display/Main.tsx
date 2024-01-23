import { Cemjsx } from "cemjs-all";
import policy from "@json/policy";

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <h1 class="title-big">Политика использования данных</h1>
        <p class="page_date">Редакция от 2022-02-21</p>
        <div class="content">
          <p>
            Для предоставления нашего Сервиса нам необходимо собирать и использовать вашу информацию. В Политике использования данных разъясняется, как мы собираем, используем и передаем информацию в
            различных Продуктах Crypto Emergency. В ней также описано множество имеющихся у вас способов управления вашей информацией, включая Настройки конфиденциальности и безопасности Crypto
            Emergency. Чтобы использовать Crypto Emergency, вы должны принять Политику использования данных.
          </p>
        </div>
        {policy.map((item) => {
          return (
            <div>
              <h2 class="title">{item.title}</h2>
              <div class="content">
                {item.content.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
