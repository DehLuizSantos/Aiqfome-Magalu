export interface CategoryInterface {
  id: string;
  name: string;
  description?: string;
  restaurantId: string;
}

export interface ProductCategoryInterface extends CategoryInterface {
  products: Omit<ProductInterface, 'options' | 'image' | 'categoryId' | 'restaurantId'>[];
}

export interface ProductInterface {
  id: string;
  price: number;
  categoryId: string;
  promotionPrice?: number;
  name: string;
  restaurantId: string;
  image?: string;
  description?: string;
  isAvailable: boolean;
  isIncreasable: boolean;
  tags?: string[];
  options?: IProductOption[];
}
export interface IProductOptionItem {
  id: string;
  name: string;
  price?: number;
  promotionPrice?: number;
}

export interface IProductOption {
  id: string;
  name: string;
  minQuantity: number;
  maxQuantity: number;
  items: IProductOptionItem[];
}

export type IProductItemData = Pick<ProductInterface, 'restaurantId' | 'id' | 'name' | 'price'>;
