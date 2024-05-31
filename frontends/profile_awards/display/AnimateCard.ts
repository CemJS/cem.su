export default class {
    private static values = {
        translateX: [7.25, 13, 17.25, 20] as const,
        translateY: 0,
        translateZ: 0,
        rotateZ: 0,
    };

    static getRotateZ() {
        if (this.values.rotateZ < 8)
            return this.values.rotateZ = this.values.rotateZ + 2;
        return 6
    }

    static getTranslateY() {
        return this.values.translateY = this.values.translateY + 220;
    }

    static getTranslateZ() {
        return this.values.translateZ = this.values.translateZ - 100;
    }

    private static index = 0;
    static getTranslateX() {
        const res = this.values.translateX[this.index];
        
        if (this.index < 3) this.index++;
        
        return res;
    }
}