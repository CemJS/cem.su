export default class {
    constructor(
        private readonly x: null | number,
        private readonly swiper: HTMLElement,
    ){ this.main() }

    private main() {
        this.swiper.childNodes.forEach((el: HTMLElement, i) => { 
            this.setSwipeStyles(el, i);
        });
    }

    private setSwipeStyles(swipe: HTMLElement, index: number) {
        if (index === 0) {
            this.setFirstSwipeStyle(swipe)
            return 
        }
        
        swipe.style.transform = `translate3d(
            ${ this.getTranslateX(index) },
            0px,
            ${ this.getTranslateZ(index) }px
        ) ${this.getRotateZ(index)}`;
        
        swipe.style.scale = '1';
        swipe.style.zIndex = `10 - ${ index }`;
    }

    private setFirstSwipeStyle(swipe: HTMLElement) {
        swipe.style.cssText = `
            transform: translate3d(0px, 0px, 0px) rotateZ(0deg); scale(1); z-index: 10
        `
    }

    private readonly config = {
        degTranslateX: [7.25, 13, 17.25, 20],
        translateY: 0,
        translateZ: -100,
        rotateZ: [2, 4, 6],
    }

    private getTranslateZ(i: number) {
        if (this.config.translateZ * i < -400) return -400;

        return this.config.translateZ * i;
    }

    private getTranslateX(i: number) {
        let deg: number;
        if (this.config.degTranslateX.includes(this.config.degTranslateX[i]))
            deg = this.config.degTranslateX[i -1];
        else
            deg = this.config.degTranslateX.at(-1);
        
        return `calc(${ deg }% - ${ this.swiper.offsetWidth * i }px)`;
    }

    private getTranslateY() {}

    private getRotateZ(i: number) {
        let rotate: number;
        if (this.config.rotateZ.includes(this.config.rotateZ[i]))
            rotate = this.config.rotateZ[i -1];
        else
            rotate = this.config.rotateZ.at(-1);
        
        return `rotateZ(${ rotate }deg)`;
    }
}