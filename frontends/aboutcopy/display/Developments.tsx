import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import logo_apple from '@images/social_networks/logo_apple.png'
import logo_android from '@images/social_networks/logo_android.png'
import cem_assist from '@images/social_networks/cem_assist.png'
import wallet_icon from '@images/social_networks/wallet_icon.png'
import crypto_emergency from '@images/social_networks/crypto_emergency.svg'

const developments = [
    {
        name: 'CEM Assistant',
        logo: cem_assist,
        appStore: 'https://apps.apple.com/ru/app/cem-assistant/id6448629326',
        playMarket: 'https://play.google.com/store/apps/details?id=com.cemassistant&hl=ru',
        desc: "Приложение CEM Assistent - это бесплатное приложение, которое позволяет пользоваться чатом GPT и генератором картинок абсолютно бесплатно. Также реализована функция сохранения заметок, что позволяет пользователям сохранять и организовывать свои записи и идеи. Cem Assistent может быть полезен каждому!"
    },
    {
        name: 'CEM Wallet',
        logo: wallet_icon,
        appStore: 'https://apps.apple.com/ru/app/cem-wallet/id1637300554',
        playMarket: 'https://play.google.com/store/apps/details?id=com.cemwallet&hl=en&gl=US',
        desc: "CEM Wallet - это некастодиальный кошелек для криптовалюты. Он предоставляет пользователям безопасное и удобное место для хранения и управления их криптовалютных активов. Приложение является надёжным инструментом для управления криптовалютными активами."
    },
    {
        name: 'Crypto Emergency',
        logo: crypto_emergency,
        appStore: 'https://apps.apple.com/es/app/crypto-emergency/id1635628021',
        playMarket: 'https://play.google.com/store/apps/details?id=com.cryptoemergency&hl=en&gl=US',
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии. Первая в мире специализированная социальная сеть для взаимодействия всех участников международного крипто-рынка. На данный момент платформа поддерживает 60 языков, что дает практически безграничные возможности общения, поиска и размещения материалов."
    },
]


export default function () {
    return (
        <div >
        <h2 class="about_subtitle">Наши разработки</h2>
        <div class="developments">
            {
                developments.map((item, index) => {
                    return (
                        <div class={["developments_item", `developments_item_${index + 1}`]}>
                            <h3 class="developments_item_title">{item.name}</h3>
                            <p class="developments_item_desc">{item.desc}</p>
                            <div class="developments_item_links">
                                <a
                                    href={item.appStore}
                                    onclick={this.Fn.link}
                                    class="developments_item_btn"
                                >
                                    <img src={logo_apple} alt="AppStore" class="developments_item_icon" />
                                    AppStore
                                </a>
                                <a
                                    href={item.playMarket}
                                    onclick={this.Fn.link}
                                    class="developments_item_btn"
                                >
                                    <img src={logo_android} alt="PlayMarket" class="developments_item_icon" />
                                    PlayMarket
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
