import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import type { Award as TAward } from '..';
import Award from './Award';
import TranslateCard from "./TranslateCard";

type Swiper = {
    awards: TAward[];
}
export default function({ awards }: Swiper) {
    function setEvent() {
        let grab: boolean;
        let startPageX: number;

        Ref.swiper.addEventListener("pointerdown", (e) => {
            document.getElementsByTagName("body")[0].style.cursor = "grabbing"
            Ref.swiper.style.cursor = "grabbing"
            grab = true
            startPageX = e.pageX;
        });

        document.addEventListener("pointerup", () => {
            document.getElementsByTagName("body")[0].style.cursor = "default"
            Ref.swiper.style.cursor = "grab"
            grab = false
        });

        document.addEventListener("pointermove", (e: MouseEvent) => {
            if (!grab) return;

            Static.x = e.pageX - startPageX;

            new TranslateCard(e.pageX - startPageX, Ref.swiper);
        });
    }

    function click() {
        Ref.swiper.childNodes.forEach((el: HTMLElement, i) => {
            if ( i === 0 ) {
                el.classList.remove(`swiper-card-0`)
                el.classList.add(`swiper-card-6`)
            } else {
                el.classList.remove(`swiper-card-${i}`)
                el.classList.add(`swiper-card-${i - 1}`)
            }
        })
    }


    return (
        <div class="w-full sm:max-w-60 relative swiper">
            <div class="swiper-wrapper" ref="swiper" init={ setEvent } onclick={ click }>
                { awards.map((award, i) => {
                    return <Award
                        icon={ award.icon }
                        title={ award.title }
                        reward={ award.reward }
                        description={ award.description }
                        progress={ award.progress }
                        maxProgress={ award.maxProgress }
                        ariaLabelStart={ i + 1 }
                        ariaLabelEnd={ awards.length }
                        classes={ "swiper-card swiper-card-" + i }
                    />
                })}
            </div>
        </div>
    )
}