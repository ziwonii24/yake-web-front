export interface DataItemInterface {
    // photos
    // albumId: number,
    // id: number,
    // title: string,
    // url: string,
    // thumbnailUrl: string

    // posts
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface PrdItemInterface {
    id: string
    imgUrl: string
    title: string
}

export interface OneLineListTypeInterface {
    type: string
}

export interface MultiLineListTypeInterface {
    type: string
    keyword: string
    tab: string
    page: number
}

export interface ItemIdInterface {
    id: string
}