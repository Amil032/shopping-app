export interface Categories {
  products: Product[]
  categories: Category[]
}

export interface Product {
  product_id: number
  name: string
  description: string
  price: string
  credit: string
  source: string
  category_id: number
  subcategory_id: number
  category: string
  subcategory: string
}

export interface Category {
  description: string
  category_id: number
  subcatories: Subcatory[]
}

export interface Subcatory {
  description: string
  subcategory_id: number
}
