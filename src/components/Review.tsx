import { Review as ReviewType } from "../types/generated";

interface ReviewProps {
  review: ReviewType;
}

const Review = ({ review }: ReviewProps) => {
  return (
    <div>
      <h4>{review.title}</h4>
      <p>{review.feedback}</p>
    </div>
  );
};

export default Review;
