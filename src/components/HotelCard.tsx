import styled from "styled-components";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Button from "./Button";
import { formatDate } from "../utils/date";

type Price = {
  value: number;
  currency: string;
  symbol: string;
};

interface HotelCardProps {
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

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 4/3;
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

export const HotelCard = ({
  name,
  description,
  city,
  country,
  rating,
  price,
  startDate,
  endDate,
  image,
  onShowReviews,
}: HotelCardProps) => {
  const descriptionText = documentToPlainTextString(description.json);
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Card>
      <ImageContainer>
        {image ? <img src={image.url} alt={image.title || name} /> : "IMAGE"}
      </ImageContainer>

      <Content>
        <Header>
          <div>
            <Title>{name}</Title>
            <Location>
              {city} - {country}
            </Location>
          </div>
          <div>{stars}</div>
        </Header>

        <Description>{descriptionText}</Description>

        <Footer>
          <Button variant="primary" onClick={onShowReviews}>
            Show reviews
          </Button>

          <PriceContainer>
            <PriceAmount>
              {price.value}
              {price.symbol}
            </PriceAmount>
            <DateRange>
              {formatDate(startDate)} - {formatDate(endDate)}
            </DateRange>
          </PriceContainer>
        </Footer>
      </Content>
    </Card>
  );
};
