import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import previewImg from "@images/careerBg.png"

import blockchain from '@images/about/main/blockchain.jpg'


import rocket from '@svg/about/roadmap/rocket.svg'
import wallet from '@svg/about/roadmap/wallet.svg'
import community from '@svg/about/roadmap/community.svg'
import univercity from '@svg/about/roadmap/university.svg'
import exchange from '@svg/about/roadmap/exchange.svg'
import network from '@svg/about/roadmap/network.svg'
import arrowUp from '@svg/about/roadmap/arrowUp.svg'

const roadmap = [
    {
        title: "Старт проекта",
        date: "15 июня 2021г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: rocket
    },
    {
        title: "Собственный Блокчейн СЕМ",
        date: "19 мая 2022г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: blockchain
    },
    {
        title: "Кошелёк Cem Wallet",
        date: "Сентябрь 2022г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: wallet
    },
    {
        title: "Сообщество DAO",
        date: "Лето 2023г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: community
    },
    {
        title: "Крипто Университет",
        date: "Осень 2023г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: univercity
    },
    {
        title: "Собственная Биржа",
        date: "Начало 2024г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: exchange
    },
    {
        title: "Новостная нейросеть",
        date: "Конец 2024г.",
        desc: "Crypto Emergency - это платформа, на которой вы сможете найти все ответы на вопросы, касающиеся крипто индустрии.",
        icon: network
    }
]


const RenderRoadMap = function ({ items }) {
    return (
        <div class="roadmapNew">
            <h1 class="about_subtitle">Дорожная карта</h1>
            <div class="roadmapNew_wrapper">
                <div class="roadmapNew_centerLine">
                    <div class="roadmapNew_scrollIcon">
                        <img src={arrowUp} alt="Иконка" />
                    </div>
                </div>
                {
                    items.map((item, index) => {
                        return (
                            <div
                                class={["roadmapNew_row", `roadmapNew_row_${index + 1}`]}
                                init={$el => observerRoadmap.observe($el)}
                            >
                                <section>
                                    <div class="roadmapNew_icon">
                                        <img src={item.icon} alt="Иконка" />
                                    </div>
                                    <div class="roadmapNew_details">
                                        <span class="roadmapNew_title">{item.title}</span>

                                    </div>
                                    <p class="roadmapNew_text">{item.desc}</p>
                                    <span class="roadmapNew_date">{item.date}</span>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const observerRoadmap = new IntersectionObserver(entries => {
    entries.forEach(item => {
        item.target.classList.toggle("in_view", item.isIntersecting)
    })
})

export default function () {
    return (
        <div >
            <RenderRoadMap items={roadmap}></RenderRoadMap>
        </div>
    );
}
