import { useLazyQuery } from "@apollo/client";
import { GET_HOTELS } from "../graphql/queries";
import { GetHotelsQuery } from "../types/contentful";
import Button from "./Button";
import { HotelCard } from "./HotelCard";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const LoadButton = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const LastUpdated = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-top: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;

export const HotelList = () => {
  const [lastUpdated, setLastUpdated] = useState<string>();
  const [getHotels, { loading, error, data, refetch }] =
    useLazyQuery<GetHotelsQuery>(GET_HOTELS, {
      variables: { limit: 5 },
      onCompleted: () => {
        setLastUpdated(new Date().toLocaleTimeString());
      },
    });

  const handleLoadHotels = async () => {
    if (data) {
      await refetch();
      setLastUpdated(new Date().toLocaleTimeString());
    } else {
      getHotels();
    }
  };

  return (
    <Container>
      <LoadButton>
        <Button variant="primary" onClick={handleLoadHotels} disabled={loading}>
          {data ? "Reload hotels" : "Load hotels"}
        </Button>
        {lastUpdated && <LastUpdated>Last updated: {lastUpdated}</LastUpdated>}
      </LoadButton>
      {loading ? (
        <div>Loading hotels...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        data?.hotelCollection?.items && (
          <div>
            {data.hotelCollection.items.map((hotel) => {
              if (!hotel) return null;

              return (
                <HotelCard
                  key={hotel.sys.id}
                  name={hotel.name}
                  description={hotel.description}
                  city={hotel.city}
                  country={hotel.country}
                  rating={hotel.rating}
                  price={hotel.price as any}
                  startDate={hotel.startDate}
                  endDate={hotel.endDate}
                  image={hotel.imagesCollection?.items[0]}
                  onShowReviews={() =>
                    console.log("Show reviews for:", hotel.sys.id)
                  }
                />
              );
            })}
          </div>
        )
      )}
    </Container>
  );
};
