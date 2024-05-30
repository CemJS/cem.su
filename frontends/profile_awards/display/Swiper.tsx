import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import type { Award } from '..';

type Swiper = {
    children: any;
}
export default function({ children }: Swiper) {
    return (
        <div>
            { children }
        </div>
    )
}