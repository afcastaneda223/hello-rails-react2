import React from 'react';
import PropTypes from 'prop-types';

const Greetings = ({ greeting }) => (
  <div>
    Greetings:
    {greeting}
  </div>
);

Greetings.propTypes = {
  greeting: PropTypes.string,
};

export default Greetings;