import { Product_Cart } from "./product_cart.model";

export interface Cart {
    id?: string,
    status: string,
    isLoading?: boolean,
    isComplete?: boolean,
    products?: Array<Product_Cart>, 
}
