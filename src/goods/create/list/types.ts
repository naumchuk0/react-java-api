export interface IGoodsItem {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface IGetGoods {
    slice: any;
    content: IGoodsItem[],
    totalElements: number
}