type Price = {
  value: number;
  currency: string;
  symbol: string;
};

export interface HotelCardProps {
  name: string;
  description: { json: any };
  city: string;
  country: string;
  rating: number;
  price: Price;
  startDate: string;
  endDate: string;
  image?: { url: string; title: string };
  onShowReviews: () => void;
}
