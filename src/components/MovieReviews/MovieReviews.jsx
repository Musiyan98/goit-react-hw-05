import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesReviews } from '../../components/API/API';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        const fetchedReviewsData = await getMoviesReviews(movieId);
        setReviews(fetchedReviewsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchReviewsData();
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Sorry, but now we haven`t reviews for this movie yet </p>
      )}
    </>
  );
}
