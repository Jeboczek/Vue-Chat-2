import { colors } from "./colors";
import type { Color } from "./colors";
import { create } from "random-seed";

export default class AvatarColor {
    colors: Color[];
    constructor({ availableColors = colors }) {
        this.colors = availableColors;
    }
    public getColorForUsername(username: string) {
        const random = create(username);
        const generatedNumber = random(this.colors.length);
        return this.colors[generatedNumber];
    }
}
