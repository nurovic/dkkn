export interface Category {
    _id: string,
    name: string,
    slug: string,
    description: string,
    parent: string | null,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export type CategoryList = Category[];   