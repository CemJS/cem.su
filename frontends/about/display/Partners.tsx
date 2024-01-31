import { Cemjsx } from "cemjs-all"
import b4 from '@images/partners/b4.png'
import bein from '@images/partners/bein.png'
import crypto from '@images/partners/crypto.png'
import cryptomania from '@images/partners/cryptomania.png'
import cryptosummit from '@images/partners/cryptosummit.png'
import digitit from '@images/partners/digitit.png'
import life from '@images/partners/life.png'
import plus from '@images/partners/plus.png'
import sber from '@images/partners/sber.png'
import sk from '@images/partners/sk.png'
import tech from '@images/partners/tech.png'
import mining from '@images/partners/mining.png'

const partners = [
    {
        logo: b4
    },
    {
        logo: bein
    },
    {
        logo: crypto
    },
    {
        logo: cryptomania
    },
    {
        logo: cryptosummit
    },
    {
        logo: mining
    },
    {
        logo: digitit
    },
    {
        logo: life
    },
    {
        logo: plus
    },
    {
        logo: sber
    },
    {
        logo: sk
    },
    {
        logo: tech
    }
]

let startPartners = partners.slice(0, partners.length / 2);
let endPartners = partners.slice(partners.length / 2);

export default function () {
    return (
        <div class="partners">
            <h2 class="about_subtitle">Информационные партнёры</h2>
            <div class="marquee" ref="marqueeStart">
                <ul class="marquee_content" ref="marqueeContentStart">
                    {
                        startPartners.map(item => {
                            return (
                                <li class="marquee_content_item animLeft">
                                    <img src={item.logo} alt="Партнёр" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div class="marquee" ref="marqueeEnd">
                <ul class="marquee_content marquee_content_end pt_10" ref="marqueeContentEnd">
                    {
                        endPartners.map(item => {
                            return (
                                <li class="marquee_content_item">
                                    <img src={item.logo} alt="Партнёр" />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}