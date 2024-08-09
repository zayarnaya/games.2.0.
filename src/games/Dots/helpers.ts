import { defaults } from "./consts";

export const coordsToHash = (row: number | string, col: number | string) => `${row}|${col}`;

export const hashToCoords = (hash: string) => hash.split('|').map(el => Number(el));

export const getPolygonArea = (polygon: Array<string>) => {
    const arr = polygon.map(el => hashToCoords(el));

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        const [row1, col1] = arr[i];
        const [row2, col2] = arr[i + 1];

        sum1 += row1 * col2;
        sum2 += col1 * row2;
    }

    console.log('ПЛОЩАДЬ', Math.abs(sum1 - sum2) / 2);

    return Math.abs(sum1 - sum2) / 2;
}

const pathToCoordsArray = (path: string) => {
    const arr = path.split(' ');
    const res = [];
    for (let i = 1; i < arr.length; i += 3) {
        const row = +arr[i] / defaults.step;
        const col = +arr[i + 1] / defaults.step;
        res.push([row, col]);
    }
    return res;
}

const coordsArrayToPath = (arr: number[][]) => {
    let res = '';
    res += `M ${+arr[0][0] * defaults.step} ${+arr[0][1] * defaults.step}`;
    for (let i = 1; i < arr.length; i++) {
        res += ` L ${+arr[0][0] * defaults.step} ${+arr[0][1] * defaults.step}`
    }
    return res;
}

const pathToHashArray = (path: string) => {
    const arr = path.split(' ');
    const res = [];
    for (let i = 1; i < arr.length; i += 3) {
        const row = +arr[i] / defaults.step;
        const col = +arr[i + 1] / defaults.step;
        res.push(coordsToHash(row, col));
    }
    return res;
}

const hashArrayToCoords = (arr: string[]) => {
    let res = '';
    res += `M ${hashToCoords(arr[0]).join(' ')}`;
    for (let i = 1; i < arr.length; i++) {
        res += ` L ${hashToCoords(arr[i]).join(' ')}`
    }
    return res;
}

const isPathFull = (path: string) => {
    const arr = pathToHashArray(path);
    arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return true; /// ааааа нет, там же не будет конечной
    }
    return false;
}
