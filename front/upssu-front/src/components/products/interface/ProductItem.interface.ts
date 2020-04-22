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
    id: number
    name: string
    img: string
    price: string
    score: string
    maker: string
}

export interface OneLineListTypeInterface {
    type: string
}

export interface ItemInterface {
    data: DataItemInterface
    col: string
}

export interface ItemIdInterface {
    id: string
}