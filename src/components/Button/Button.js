import css from './Button.module.css'

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className={css.loadButton} onClick={loadMore}>
      Load More
    </button>
  );
};
