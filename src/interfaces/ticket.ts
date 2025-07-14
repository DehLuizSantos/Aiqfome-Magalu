export interface CustomizationTicketInterface {
  groupName: string;
  label: string;
  price?: number;
  quantity?: number;
}

export interface ProductTicketInterface {
  quantity: number;
  name: string;
  id: string;
  price: number;
  customization?: CustomizationTicketInterface[];
  observation?: string;
}
