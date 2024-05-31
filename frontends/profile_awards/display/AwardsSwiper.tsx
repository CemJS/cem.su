import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import type { Award as TAward } from '..';
import Award from './Award';

type Swiper = {
    awards: TAward[];
}
export default function({ awards }: Swiper) {
    function shuffleRight() {
        changeStyle();
        moveFirstElToEnd();
    }

    function moveFirstElToEnd() {
        const node = document.querySelectorAll('.testAward')[1];
        const element = node.childNodes[0] as HTMLElement;
        
        node.removeChild(element);
        node.appendChild(element);
    }

    function changeStyle () {
        const node = document.querySelectorAll('.testAward')[1];
        const nodeList = node.childNodes;

        nodeList.forEach((el: HTMLElement, i) => {
            if( i === 0 ) {
                el.classList.remove(`card-${i}`);
                el.classList.add(`card-6`);
            }
            else {
                el.classList.remove(`card-${i}`);
                el.classList.add(`card-${i - 1}`);
            }
                
        })
    }

    return (
        <div class="w-full sm:max-w-60 relative swiperTest" >
            <div class="swiper-wrapperTest testAward" onclick={shuffleRight}>
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
                        classes={ `card-${i}` }
                    />
                })}
            </div>
        </div>
    )
}