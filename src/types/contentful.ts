import { Document } from "@contentful/rich-text-types";

type HotelDescription = {
  json: JSON;
  links: HotelDescriptionLinks;
};

type HotelDescriptionLinks = {};

export type Hotel = {
  sys: {
    id: string;
  };
  name: string;
  description: HotelDescription;
  rating: number;
  price: JSON;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  imagesCollection: {
    items: Array<{
      url: string;
      title: string;
    }>;
  };
};

export type Review = {
  sys: {
    id: string;
  };
  title: string;
  rating: number;
  comment: {
    json: Document;
  };
  feedback: string;
  customer: {
    sys: {
      id: string;
    };
  };
};

export type GetHotelsQuery = {
  hotelCollection?: {
    items: Array<Hotel | null>;
  } | null;
};

export type GetHotelReviewsQuery = {
  reviewCollection?: {
    items: Array<Review | null>;
  } | null;
};
