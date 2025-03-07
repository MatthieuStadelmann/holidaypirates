import { Hotel } from "./generated";

export type Price = {
  value: number;
  currency: string;
  symbol: string;
};

export type HotelDescription = {
  json: Document;
};

export interface HotelCardProps {
  hotel: Hotel
  onShowReviews: () => void;
}
