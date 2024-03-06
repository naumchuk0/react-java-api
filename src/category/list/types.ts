export interface ICategoryItem {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface IGetCategories {
    slice: any;
    content: ICategoryItem[],
    totalElements: number
}

export interface ICategorySearch{
    name: string,
    page: number,
    size: number
}
