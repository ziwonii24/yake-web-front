export interface PrdItemInterface {
    id: string
    imgUrl: string
    title: string
    score?: string
    averageRating?: number
    totalRatingCount?: number
}

export interface PrdItemDetailInterface {
    id: string
    displayName: string
    averageRating: string
    imgurl: string
    brandName: string
    description: string
    ingredients: string
    retailPrice: string
    supplementFacts: string
    suggestedUse: string
    warnings: string
}

export interface OneLineListTypeInterface {
    id : string
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

export interface SpecInterface {
    age: string
    gender: string
}