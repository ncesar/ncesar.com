import React from 'react';
import PostItem from '../PostItem';

const Hit = ({ hit }) => {
  return (
    <PostItem
      slug={hit.fields.slug}
      title={hit.title}
      date={hit.date}
      background={hit.background}
      description={hit.description}
      category={hit.category}
    />
  );
};

export default Hit;
