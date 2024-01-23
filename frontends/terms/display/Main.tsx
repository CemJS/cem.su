import { Cemjsx } from "cemjs-all";
import terms from "@json/terms";

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <h1 class="title-big">Добро пожаловать в Crypto Emergency!</h1>
        <p class="page_date">Редакция от 2022-02-21</p>
        <div class="content">
          <p>
            Настоящие Условия использования ("Условия") регулируют использование вами crypto-emergency.com (если прямо не указано, что применяются отдельные условия, а не эти) и содержат информацию о
            Сервисе Crypto Emergency ("Сервис"), изложенную ниже. Создавая аккаунт Crypto Emergency или используя Crypto Emergency, вы принимаете настоящие условия.
          </p>
        </div>
        {terms.map((item) => {
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
