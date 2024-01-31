import { useDispatch, useSelector } from 'react-redux';
import { setTitleFilter,
         resetFilters,
         setAuthorFilter,
         setOnlyFavoriteFilter,
         selectTitleFilter,
         selectAuthorFilter ,
         selectOnlyFavoriteFilter} from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  }

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            onChange={handleTitleFilterChange}
            placeholder='Filter by title...' />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            onChange={handleAuthorFilterChange}
            placeholder='Filter by author...' />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange} />
            Only Favorite
          </label>
        </div>
        <button
          type="button"
          onClick={handleResetFilters}>
            Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter;