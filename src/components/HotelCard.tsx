import styled from "styled-components";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Button from "./Button";
import { formatDate } from "../utils/date";
import { Hotel, Review } from "../types/generated";
import { useLazyQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";
import { GetHotelReviewsQuery } from "../types/generated";
import ReviewList from "./ReviewList";
import { useState } from "react";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

const Location = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: auto;
`;

const PriceContainer = styled.div`
  text-align: right;
`;

const PriceAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const DateRange = styled.div`
  color: #666;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const Description = styled.p`
  text-align: left;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  const [getReviews, { data: reviewsData, refetch }] =
    useLazyQuery<GetHotelReviewsQuery>(GET_REVIEWS, {
      variables: { hotelId: hotel.sys.id },
      notifyOnNetworkStatusChange: true,
    });

  const [showReviews, setShowReviews] = useState(false);

  const handleShowReviews = async () => {
    if (!reviewsData) {
      await getReviews();
    } else {
      refetch();
    }
    setShowReviews(!showReviews);
  };

  const descriptionText = documentToPlainTextString(
    hotel.description?.json || {}
  );
  const stars =
    "★".repeat(hotel.rating || 0) + "☆".repeat(5 - (hotel.rating || 0));

  return (
    <Card>
      <TopSection>
        <ImageContainer>
          {hotel.imagesCollection?.items[0]?.url ? (
            <img
              src={hotel.imagesCollection.items[0].url}
              alt={
                hotel.imagesCollection.items[0].title ||
                hotel.name ||
                "Hotel Image"
              }
            />
          ) : (
            <PlaceholderImage>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
            </PlaceholderImage>
          )}
        </ImageContainer>

        <Content>
          <Header>
            <div>
              <Title>{hotel.name}</Title>
              <Location>
                {hotel.city} - {hotel.country}
              </Location>
            </div>
            <div>{stars}</div>
          </Header>

          <Description>{descriptionText}</Description>

          <Footer>
            <Button variant="primary" onClick={handleShowReviews}>
              {showReviews ? "Hide Reviews" : "Show Reviews"}
            </Button>

            <PriceContainer>
              <PriceAmount>
                {hotel.price?.value}
                {hotel.price?.symbol}
              </PriceAmount>
              <DateRange>
                {formatDate(hotel.startDate)} - {formatDate(hotel.endDate)}
              </DateRange>
            </PriceContainer>
          </Footer>
        </Content>
      </TopSection>

      {showReviews && reviewsData?.reviewCollection?.items && (
        <ReviewList
          reviews={reviewsData.reviewCollection.items.filter(
            (review): review is Review => review !== null
          )}
        />
      )}
    </Card>
  );
};
