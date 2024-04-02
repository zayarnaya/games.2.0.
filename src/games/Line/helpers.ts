import { defaultItem, startArr } from "./consts";
import { LineItem } from "./types";

export const getDefaultArray = () => {
    return startArr.map(item => {
        return {...defaultItem, value: item};
    })
}

export const checkHorizontal = (array: LineItem[], m: number, l: number) => {
    if (array[m].value !== array[l].value && array[m].value + array[l].value !== 10) {
        return false;
    }
    for (let i = Math.min(m, l) + 1; i < Math.max(m, l); i++) {
        if (!array[i].deleted) return false;
    }
    return true;
}

export const checkVertical = (array: LineItem[], m: number, l: number) => {
    if (array[m].value !== array[l].value && array[m].value + array[l].value !== 10) {
        console.log(1);
        return false;
    }

    const row1 = Math.floor(m / 9);
    const col1 = m - row1*9;
    const row2 = Math.floor(l / 9);
    const col2 = l - row2*9;

    if (col1 !== col2) return false;
    for (let i = Math.min(m, l) + 9; i < Math.max(m, l); i+=9) {
        if (!array[i].deleted) {
            console.log(2)
            return false;
        }
    }
    return true;
}
