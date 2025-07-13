type CustomizationType = 'single' | 'multiple' | 'quantity';

export interface CustomizationOption {
  id: string;
  label: string;
  price: number;
  basePrice?: number;
  hasPromotions?: boolean;
  default?: boolean;
}

export interface ProductCustomization {
  id: string;
  type: CustomizationType;
  title: string;
  subtitle?: string;
  required: boolean;
  min?: number;
  max?: number;
  options: CustomizationOption[];
}

export interface ProductInterface {
  id: string;
  name: string;
  description: string;
  image: string;
  basePrice: number;
  price: number;
  hasPromotions: boolean;
  multiplePrices: boolean;
  type?: string;
  customizations: ProductCustomization[];
}

export interface CategoryInterface {
  id: string;
  name: string;
  description: string;
  hasPromotions?: boolean;
  products: ProductInterface[];
}
