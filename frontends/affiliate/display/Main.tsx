import { Cemjsx } from "cemjs-all";
import copy from "@svg/icons/copy.svg";
import share from "@svg/icons/share.svg";

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <div class="affiliate__card">
          <h2 class="affiliate__card-title">Партнерская программа</h2>
          <p class="affiliate__card-text">
            Разместите ссылку в социальных сетях, поделитесь с друзьями и заработайте токены CEM с каждого заpегистрированного пользователя. Также, для самых активных участников, у нас готовится
            расширенная программа монетизации для авторов контента.
          </p>
          <div class="affiliate__link">
            <p class="affiliate__link-title">Реферальная ссылка</p>
            <div class="affiliate__link-wrapper">
              <p class="affiliate__link-text">https://crypto-emergency.com/user/MatveyShul</p>
              <div class="affiliate__link-buttons">
                <button class="affiliate__link-btn">
                  <img
                    src={copy}
                    alt="Скопировать"
                  />
                </button>
                <button class="affiliate__link-btn">
                  <img
                    src={share}
                    alt="Поделиться"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
