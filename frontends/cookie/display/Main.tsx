import { Cemjsx, Fn } from "cemjs-all";

export default function () {
  return (
    <div class="page">
      <div class="wrapper wrapper_padding">
        <h1 class="title !text-[clamp(2.2rem,1.5vw,3rem)] !leading-[2.5rem]">
          Политика Cookies
        </h1>
        <p class="page__date">Редакция от 2021-12-16</p>
        <div class="title">ЧТО ТАКОЕ ФАЙЛЫ COOKIE?</div>
        <div class="content">
          <p>
            Файлы cookie — это текстовые файлы небольшого объема, сохраняемые на
            вашем компьютере, планшете или мобильном телефоне. Они НЕ вредят
            компьютеру или системе безопасности и, вопреки ошибочному мнению, не
            имеют ничего общего с такими вирусами, как троянские программы. При
            посещении сайта файлы cookie позволяют сайту «запоминать» вас и ваши
            предпочтения для повышения качества взаимодействия с сайтом. Более
            подробную информацию о файлах cookie можно найти в Интернете.
          </p>
        </div>
        <h2 class="title text-left">
          Как я могу контролировать настройки, позволяющие использование cookie?
        </h2>
        <div class="content">
          <p>
            Если вы не хотите получать файлы cookie, вы можете изменить
            настройки браузера так, чтобы он уведомлял вас о получении этих
            файлов, или же полностью отказаться от них. Вы также можете удалить
            уже сохраненные файлы cookie.
          </p>
        </div>
        <h2 class="title text-left">Как мы используем файлы cookie ?</h2>
        <div class="content">
          <p>
            Мы используем Google Analytics, сервис для веб-аналитики,
            предоставляемый Google Inc. (Google). Этот сервис использует файлы
            cookie для анализа взаимодействия с сайтом в целях повышения
            качества обслуживания. Наш сайт использует так называемый
            идентификатор пользователя, который служит для идентификации
            клиентов в Google Analytics. На основе вашего поведения Google
            создает профиль для вашего идентификатора пользователя. Google
            Analytics отслеживает действия анонимизированных пользователей на
            разных устройствах (планшеты, ПК, смартфоны и т. д.).", "Информация
            об использовании веб-сайтов, собранная с помощью файлов cookie
            (включая IP-адрес), передается Google и хранится на серверах,
            размещенных на территории США. Google использует собранные сведения
            для анализа взаимодействия пользователей с веб-сайтом, составления
            отчетов о посещаемости веб-сайта для нас, а также для оказания
            других услуг, связанных с использованием веб-сайта и сети Интернет.
            Google может передавать эти сведения третьим лицам, если это
            требуется по закону или для их обработки от лица Google. Ваш
            IP-адрес не связан с другими данными, собранными Google.
          </p>
          <p>
            В распоряжение Google предоставляется только идентификатор
            пользователя, но не информация, содержащаяся в упомянутом выше
            профиле, или другие персональные данные.", "Нам доступны сводные
            данные созданного профиля. Мы не добавляем данные, которые можно
            использовать для установления личности, в профиль, связанный с
            идентификатором пользователя.
          </p>
          <p>
            Вы можете отказаться от отслеживания по идентификатору пользователя,
            отправив письмо по адресу&nbsp;
            <a
              class="link"
              href="mailto:support@crypto-emergency.com"
              onclick={Fn.link}
            >
              support@crypto-emergency.com
            </a>
            .
          </p>
          <p>
            Вы также можете отказаться от использования файлов cookie, установив
            соответствующие настройки в браузере. Обратите внимание на то, что в
            этом случае некоторые функции сайта могут быть недоступны. Пользуясь
            этим сайтом, вы даете свое согласие на обработку своих данных
            компанией Google описанным выше образом в целях, перечисленных в
            этих правилах. Более подробную информацию о файлах cookie можно
            найти на сайте{" "}
            <a
              class="link"
              href="http://www.aboutcookies.org"
              onclick={Fn.link}
            >
              http://www.aboutcookies.org
            </a>
            .
          </p>
        </div>
        <h2 class="title">ДОГОВОР ПОЛЬЗОВАНИЯ</h2>
        <div class="content">
          <p>
            Продолжая пользоваться нашим сайтом, вы соглашаетесь на размещение
            файлов cookie на вашем устройстве. Если вы решили отказаться от
            наших файлов cookie, мы не можем гарантировать, что ваше посещение
            сайта будет таким же успешным, как при получении файлов cookie.
          </p>
        </div>
        <div class="flex justify-center">
          <a target="_blank" href="/contents/docs/cookieRU.pdf">
            <button class="btn mx-auto">Скачать</button>
          </a>
        </div>
      </div>
    </div>
  );
}
