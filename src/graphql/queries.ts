import { gql } from "@apollo/client";

export const GET_HOTELS = gql`
  query GetHotels($limit: Int!) {
    hotelCollection(limit: $limit) {
      items {
        sys {
          id
        }
        name
        description {
          json
        }
        rating
        price
        country
        city
        startDate
        endDate
        imagesCollection(limit: 1) {
          items {
            url
            title
          }
        }
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  query GetReviews($hotelId: String!) {
    reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {
      items {
        sys {
          id
        }
        title
        rating
        feedback
        comment {
          json
        }
        customer {
          firstName
          lastName
        }
      }
    }
  }
`;
