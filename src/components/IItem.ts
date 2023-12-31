import IMainImage from "./IMainImage";

export default interface IItem {
  listing_id: number;
  url: string;
  title: string;
  currency_code: string;
  price: number;
  quantity: number;
  MainImage: IMainImage;
}