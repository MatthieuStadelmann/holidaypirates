import { Review as ReviewType } from "../types/generated";
import Review from "./Review";

interface ReviewListProps {
  reviews: ReviewType[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div>
      {reviews.map(
        (review, index) =>
          review && <Review key={index} review={review} />
      )}
    </div>
  );
};

export default ReviewList;