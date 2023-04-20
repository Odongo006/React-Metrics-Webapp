import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchShowName.module.css';
import { updateShow } from '../../redux/show/shows';

const SearchShowName = () => {
  const allData = useSelector((state) => state.allData);
  const dispatch = useDispatch();

  const searchShowHandler = ({ target: { value } }) => {
    const keyword = value.toLowerCase();

    const results = keyword
      ? allData.filter((user) => user.name.toLowerCase().includes(keyword))
      : allData;

    dispatch(updateShow(results));
  };

  return (
    <div>
      <div className={styles.categoryContainer} data-testid="SearchShowName">
        <input
          className={styles.inputCategory}
          type="text"
          placeholder="Search show name.."
          onChange={searchShowHandler}
        />
      </div>
    </div>
  );
};

export default SearchShowName;
