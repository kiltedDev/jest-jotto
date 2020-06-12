import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './congrats';

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = ( props = {}) => {
  const wrapper = shallow( <Congrats {...props}/> );
  return wrapper;
};

test( 'renders successfully', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr( wrapper, 'component-congrats' );
  expect( component.length ).toBe( 1 );
});

test( 'renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr( wrapper, 'component-congrats' );
  expect( component.text()).toBe( '' );
});

test( 'renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr( wrapper, 'congrats-message' );
  expect( message.text().length ).not.toBe( 0 );
});

test( 'does not throw prop-types warning with expected prop', () => {
  const expectedProps = { success: false };
  const propError = checkProps( Congrats, expectedProps );
  expect( propError ).toBeUndefined();
});
