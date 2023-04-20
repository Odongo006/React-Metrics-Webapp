/* eslint-disable camelcase */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ShowCard.module.css';

export default function ShowCard({ show: { id, name, poster_path } }) {
  const imageLink = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <li className={styles.showCard}>
      <Link to={`/tv/${id}`}>
        <img
          width={220}
          height={330}
          className={styles.showImage}
          src={imageLink}
          alt={name}
        />
        <div>{name}</div>
      </Link>
    </li>
  );
}

ShowCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
