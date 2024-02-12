import { Cemjsx, Fn, Ref, front } from "cemjs-all";
import footer from "@json/footer";
import appStore from "@svg/icons/appStore.svg";
import playMarket from "@svg/icons/playMarket.svg";
import socials from "@json/footerSocial";
import show from "@svg/icons/footerShow.svg";

export default function () {
  return (
    <footer
      init={($el) => {
        front.Variable.$el.footer = $el;
      }}
      class="footer"
    >
      <div class="wrapper footer_wrapper">
        <div class="footer__top">
          {footer.map((item, i) => {
            return (
              <div
                ref={`list${i}`}
                onclick={(e) => Ref[`list${i}`].classList.toggle("footer__list_active")}
                class="footer__list"
              >
                <h3 class="footer__list-title">
                  {item.title}{" "}
                  <div class="footer__list-show">
                    <img
                      src={show}
                      alt="Открыть"
                    />
                  </div>
                </h3>
                <div class="footer__items">
                  {item.items.map((item) => {
                    return <li class="footer__item">{item}</li>;
                  })}
                </div>
              </div>
            );
          })}
          <div class="footer__list footer__list_aps">
            <div class="footer__items footer__items_aps">
              <a
                class="footer__item footer__item_aps"
                href="https://apps.apple.com/ru/app/crypto-emergency/id1635628021"
                onclick={Fn.link}
              >
                <img
                  src={appStore}
                  alt="AppStore"
                />
              </a>
              <a
                class="footer__item footer__item_aps"
                href="https://play.google.com/store/apps/details?id=com.cryptoemergency"
                onclick={Fn.link}
              >
                <img
                  src={playMarket}
                  alt="PlayMarket"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__copyright">©2020-2024 Crypto Emergency</div>
          <div class="social-networks social-networks_footer">
            {socials.map((item) => {
              return (
                <div class="social-networks__item">
                  <img
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
