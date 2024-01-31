import { Cemjsx, Fn, Func, Static } from "cemjs-all";
import programs from "json/program.json";
import banners from "json/affiliateBanners.json";
import copy from "@svg/icons/copy.svg";

const RenderItem = (img, title, text) => {
  return (
    <div class="program__item">
      <div class="program__item-img">
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2 class="program__item-title">{title}</h2>
      <p class="program__item-text">{text}</p>
    </div>
  );
};

const RenderLanguages = () => {
  return banners.map((item) => {
    return (
      <div
        onclick={() => {
          Static.language = item.language;
          Func.changeLanguage();
        }}
        class={["program__banners-language", Static.language == item.language ? "active" : null]}
      >
        {item.language}
      </div>
    );
  });
};

const RenderSizes = () => {
  return Static.sizes.banners?.map((item) => {
    return (
      <div
        onclick={() => {
          Static.currentSize = item;
          Func.changeLink();
        }}
        class={["program__banners-size", Static.currentSize == item ? "active" : null]}
      >
        {item}
      </div>
    );
  });
};

const RenderLinkInput = () => {
  return (
    <div class="program__banners-group">
      <input
        disabled
        value={Static.fullLink}
        type="text"
        class="program__banners-input"
      />
      <button
        onclick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(Static.fullLink);
          e.target.classList.add("active");
          setTimeout(() => {
            e.target.classList.remove("active");
          }, 1500);
        }}
        class="program__banners-copy"
      >
        <img
          src={copy}
          alt="Скопировать"
        />
        Скопировать
      </button>
    </div>
  );
};

const RenderTagInput = () => {
  return (
    <div class="program__banners-group">
      <textarea
        disabled
        value={Static.tagLink}
        type="text"
        class="program__banners-input"
      />
      <button
        onclick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(Static.tagLink);
          e.target.classList.add("active");
          setTimeout(() => {
            e.target.classList.remove("active");
          }, 1500);
        }}
        class="program__banners-copy"
      >
        <img
          src={copy}
          alt="Скопировать"
        />
        Скопировать
      </button>
    </div>
  );
};

export default function () {
  return (
    <div class="page">
      <div class="wrapper">
        <p class="program__title program__title_margin">Присоединяйтесь к партнерской программе Crypto Emergency</p>
        <div class="program__list">
          {programs.map((item) => {
            return RenderItem(item.img, item.title, item.text);
          })}
        </div>
        <div class="program__banners">
          <div class="program__banners-left">
            <h4 class="program__banners-title program__banners-title_margin">Размер баннера</h4>
            <div class="program__banners-languages">{RenderLanguages()}</div>
            <div class="program__banners-sizes">{RenderSizes()}</div>
          </div>
          <div class="program__banners-right">
            <h4 class="program__banners-title">Рекламные материалы</h4>
            {RenderLinkInput()}
            <h4 class="program__banners-title">Код для размещения</h4>
            {RenderTagInput()}
            <img
              ref="preview"
              src={`/contents/images/affiliate_banners/${Static.addLink}`}
              alt=""
              class="program__banners-preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
