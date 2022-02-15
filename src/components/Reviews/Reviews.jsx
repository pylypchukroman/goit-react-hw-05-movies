import style from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'Utils/MovieAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <div>
      <ul className={style.reviews}>
        {reviews.length === 0 ? (
          <p>
            <b>We don't have any reviews for this movie</b>
          </p>
        ) : (
          reviews.map(review => (
            <li key={review.id} className={style.item}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
