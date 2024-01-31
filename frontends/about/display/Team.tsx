import { Cemjsx, Fn, Func, Static } from "cemjs-all"
import previewImg from "@images/careerBg.png"

import yan from '@images/about/team/team1.png'
import anya from '@images/about/team/team2.png'
import dima from '@images/about/team/team3.png'
import igor from '@images/about/team/team4.png'
import logo from "@svg/about/cryptoEmergency.svg"

const team = [
    {
        image: yan,
        name: 'Ян Кривоносов',
        post: 'CEO и Founder',
        link: '/user/Yan_Krivonosov'
    },
    {
        image: igor,
        name: 'Игорь Еньшин',
        post: 'Технический директор',
        link: '/user/Betarost'
    },
    {
        image: anya,
        name: 'Анна Рыжкова',
        post: 'Руководитель дизайн отдела',
        link: '/user/Anyaryzhkova'
    },
    {
        image: dima,
        name: 'Дмитрий Белов',
        post: 'Управляющий директор',
        link: '/user/Dmitrii_Belov'
    }
]

export default function () {
    return (
        <div>
            <h2 class="about_subtitle">Команда</h2>
            <div class="team">
                {
                    team.map(item => {
                        return (
                            <div class="team_item">

                                <div class="team_item_content">
                                    <div
                                        class="team_item_front"
                                        style={`background-image: url(${item.image});`}>
                                        <div class="team_item_title">
                                            <h2 >{item.name}</h2>
                                        </div>
                                        <div class="team_item_post">
                                            <p>{item.post}</p>
                                        </div>
                                    </div>

                                    <div
                                        class="team_item_back"
                                        style={`background-image: url(${item.image});`}>
                                        <a href={item.link} class="btn btn_timing" onclick={this.Fn.link}>
                                            <span>Перейти в профиль</span>
                                            <img src={logo} alt="Присоединиться к телеграм каналу" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
