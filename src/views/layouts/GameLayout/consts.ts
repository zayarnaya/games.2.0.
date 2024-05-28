const url = process.env.GAMES_BASE_URL;

export const headings: Record<string, string> = {
	[url]: 'Игра в вычеркни число',
	[`${url}knight`]: 'Игра в ход конем',
	[`${url}tetris`]: 'Тетрис',
};
