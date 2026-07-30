import { Rating } from "../../../../../components/commerce/rating/ProductRating/ProductRating";
import {
  Root,
  Header,
  AuthorBlock,
  Author,
  DateText,
  Title,
  Comment,
  Footer,
} from "./ReviewCard.styles";
import type { ReviewCardProps } from "./ReviewCard.types";


export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Root className={className}>
      <Header>
        <AuthorBlock>
          <Author>{review.author}</Author>

          <DateText>{review.createdAt.toLocaleDateString()}</DateText>
        </AuthorBlock>

        <Rating value={review.rating.value} size={"sm"} />
      </Header>

      {review.title && <Title>{review.title}</Title>}

      <Comment>{review.comment}</Comment>

      <Footer />
    </Root>
  );
}
