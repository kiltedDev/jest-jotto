import React from 'react';
import PropTypes, { bool } from 'prop-types';

/**
 * Functional React fomponent for congrats message
 * @function
 * @param {object} props - React Props
 * @returns {JSX.Element} - rendered component or null if succes prop is false
 */

const Congrats = ( props ) => {
  if ( props.success ) {
    return (
      <div data-test="component-congrats" className='alert alert-success'>
        <span data-test="congrats-message">
          Congratulations!  You guessed the word!
        </span>
      </div>
    );
  }
  return (
      <div data-test="component-congrats"></div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
