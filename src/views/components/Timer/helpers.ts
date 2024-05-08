export const getTime = (time: string | number) => {
    let secs = Math.floor(+time / 1000);
    let mins = Math.floor(secs / 60);
    secs -= mins * 60;
    let hours = Math.floor(mins / 60);
    mins -= hours * 60;
    return {hours, mins, secs};
}

export const parseTime = (time: string) => {
    const arr = time.split(':').map(el => Number(el));
    return arr;
}
