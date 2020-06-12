import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ( props ) => {
  let contents;
  if ( props.guessedWords.legth === 0 ) {
    contents = (
      <span data-test='guess-instructions'>
        Try to guess the secret word!
      </span>
    );
  }

  return (
    <div data-test='component-guessed-words'>

    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.string.isRequired,
    }),
  ),
};

export default GuessedWords;
