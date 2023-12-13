export interface Category {
  _id: string
  category_name: string
  category_description: string
  parent_category: any
  createdAt: string
  updatedAt: string
  __v: number
}
export interface User {
  _id: string
  username: string
  password: string
  email: string
  display_name: string
  phone: string
  status: string
  isBlocked: boolean
  roles: string[]
  user_attributes: UserAttributes | {}
  createdAt: string
  updatedAt: string
  __v: number
}

export interface UserAttributes {
  positionId: string
  manager_start_date: string
  salary: number
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface Product_Category {
  _id: string
  category_name: string
}


export interface Product {
  _id: string
  product_name: string
  product_thumb: string
  product_description: string
  product_price: number
  product_quantity: number
  product_brand: string
  product_unit: string
  product_ratingAverage: number
  product_categories: Product_Category[]
  createdAt: string
  updatedAt: string
  product_slug: string
  __v: number
}

export interface Comment {
  _id: string
  comment_productId: string
  comment_userId: string
  comment_content: string
  comment_left: number
  comment_right: number
  comment_parentId: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface CartInterface {
  _id: string
  cart_userId: string
  __v: number
  cart_count_products: number
  cart_products: CartProduct[]
  cart_state: string
  createdAt: string
  updatedAt: string
}

export interface CartProduct {
  product_name: string
  product_thumb: string | null
  product_description: string | null
  product_price: number
  product_quantity: number
  product_brand: string | null
  product_unit: string | null
  product_ratingAverage: number | null
  product_categories: string[] | null
  productId: string | null
}

export interface Order_Checkout {
  totalPrice: number
  feeShip: number
  totalDiscount: number
  finalPrice: number
}

export enum Order_StatusEnum { 'pending', 'confirmed', 'shipped', 'cancelled', 'delivered' }
export interface Order_Payment {
  status: string
  method: string
}

export interface Order {
  _id: string
  order_userId: string
  order_address: Object
  order_checkout: Order_Checkout
  order_products: Object[]
  order_status: string
  order_note: string
  order_phone: string
  order_payment: Order_Payment
  order_date: Date
  createdAt: Date
  updatedAt: Date
}