import { Review as ReviewType } from "../types/generated";
import Review from "./Review";

interface ReviewListProps {
  reviews: ReviewType[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div>
      {reviews.map(
        (review) =>
          review && <Review key={review.sys.id} review={review} />
      )}
    </div>
  );
};

export default ReviewList;