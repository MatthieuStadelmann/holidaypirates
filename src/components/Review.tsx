import styled from "styled-components";
import { Review as ReviewType } from "../types/generated";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface ReviewProps {
  review: ReviewType;
}

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px ${({ theme }) => theme.spacing.large};
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.spacing.large};
  line-height: 0;
`;

const ReviewContent = styled.div`
  flex: 1;
`;

const ReviewTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;
`;

const ReviewFeedback = styled.p`
  margin: ${({ theme }) => theme.spacing.small} 0 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Review = ({ review }: ReviewProps) => {
  const isPositive = review.feedback?.toLowerCase() === "positive";
  const commentText = review.comment
    ? documentToPlainTextString(review.comment.json)
    : "";

  return (
    <ReviewContainer>
      <Avatar>{isPositive ? "+" : "-"}</Avatar>
      <ReviewContent>
        <ReviewTitle>
          {review.customer?.firstName} {review.customer?.lastName}
        </ReviewTitle>
        <ReviewFeedback>{commentText}</ReviewFeedback>
      </ReviewContent>
    </ReviewContainer>
  );
};

export default Review;
