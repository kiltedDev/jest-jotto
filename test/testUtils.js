import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = ( wrapper, val ) => wrapper.find( `[data-test="${ val }"]` );
export const checkProps = ( component, conformingProps ) => {
  const propError = checkPropTypes(
    component.PropTypes,
    conformingProps,
    'prop',
    component.name,
  );
  return propError;
};
