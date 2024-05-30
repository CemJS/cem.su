import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import type { Award as TAward } from '..';
import Award from './Award';

type Swiper = {
    awards: TAward[];
}
export default function({ awards }: Swiper) {
    const values = {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateZ: 0,
    }

    function getRotateZ() {
        return values.rotateZ = values.rotateZ + 2;
    }

    function getTranslateY() {
        return values.translateY = values.translateY + 220;
    }

    function getTranslateZ() {
        return values.translateZ = values.translateZ - 100;
    }

    function getTranslateX() {
        const res = [7.25, 13, 17.25, 20][values.translateX];
            
        values.translateX++;
        if(values.translateX > 3) values.translateX = 3;

        return res;
    }

    return (
        <div class="w-full sm:max-w-60 relative z-10" style="perspective: 1200px;">
            <div class="h-full flex conatinerA">
                { awards.map((award, i) => {
                    return <Award
                        icon={ award.icon }
                        title={ award.title }
                        reward={ award.reward }
                        description={ award.description }
                        progress={ award.progress }
                        maxProgress={ award.maxProgress }
                        classes={ i === 0 ? 'relative z-[10]' : `secondary-award z-[${10-i}]` }
                        style={ i !== 0 ? `transform: translate3d(calc(${getTranslateX()}% - ${getTranslateY()}px), 0px, ${getTranslateZ()}px) rotateZ(${getRotateZ()}deg) scale(1);` : null }
                    />
                })}
            </div>
        </div>
    )
}