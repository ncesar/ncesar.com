import React from 'react';
import PropTypes from 'prop-types';

const variantType = type => {
  switch (type) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    default:
      return 'p';
  }
};
const Typography = props => {
  const { variant, ...other } = props;
  const Component = variant ? variantType(variant) : 'p';
  return <Component {...other} />;
};

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default Typography;
