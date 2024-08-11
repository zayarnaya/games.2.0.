export type LineItem = {
	active: boolean;
	deleted: boolean;
	value: number;
};

export type LineHistoryItem = {
	idx: [number, number] | number[];
	length: number;
}
