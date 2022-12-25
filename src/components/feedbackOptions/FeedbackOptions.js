import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <feedbackBtn>
      <Button type="button" name={options[0]} onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name={options[1]} onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name={options[2]} onClick={onLeaveFeedback}>
        Bad
      </Button>
    </feedbackBtn>
  );
};

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
