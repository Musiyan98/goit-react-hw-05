import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesReviews } from '../../components/API/API';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviewsData() {
      try {
        setError(false);
        setLoading(true);
        const fetchedReviewsData = await getMoviesReviews(movieId);
        setReviews(fetchedReviewsData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviewsData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && reviews && reviews.length > 0 && (
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
      )}
      {!loading && !error && !reviews && (
        <p>Sorry, but now we haven`t reviews for this movie yet </p>
      )}
    </>
  );
}
