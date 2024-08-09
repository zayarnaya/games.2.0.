export const copyMatrix = (matrix: any[][]) => {
    const res = [];
    for (let el of matrix) {
        res.push([...el]);
    } 
    return res;
}
