import getLetterMatchCount from './index';

describe( 'getLetterMatchCount', () => {
  const secretWord = 'party';
  test( 'returns correct count with no matching letters', () => {
    const letterMatchCount = getLetterMatchCount( 'bones', secretWord );
    expect( letterMatchCount ).toBe( 0 );
  });

  test( 'returns correct count for 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount( 'train', secretWord );
    expect( letterMatchCount ).toBe( 3 );
  });
  test( 'returns correct count for duplicate matching letters', () => {
    const letterMatchCount = getLetterMatchCount( 'parka', secretWord );
    expect( letterMatchCount ).toBe( 3 );
  });
});
