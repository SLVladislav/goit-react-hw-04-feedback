import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

function FeedbackOptions({ options, handleIncrement }) {
  return (
    <div className={css.wrap}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            onClick={() => handleIncrement(option)}
            key={option}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};
export default FeedbackOptions;
