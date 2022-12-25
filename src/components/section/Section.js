import PropTypes from 'prop-types';
import { SectionFeedback } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionFeedback>
      <h2>{title}</h2>
      {children}
    </SectionFeedback>
  );
};

Section.prototype = {
  title: PropTypes.string,
};

export default Section;
