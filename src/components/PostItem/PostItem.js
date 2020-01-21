import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';
import { Coffee } from 'styled-icons/boxicons-regular/Coffee';

const returnCoffeeIcon = num => {
  for (let index = 0; index < num; index++) {
    return <Coffee style={{ width: 20 }} />;
  }
};

const coffeNeeded = timeToRead => {
  if (timeToRead >= 3) {
    return returnCoffeeIcon(1);
  } else if (timeToRead >= 5) {
    return returnCoffeeIcon(2);
  } else if (timeToRead >= 10) {
    return returnCoffeeIcon(3);
  } else if (timeToRead >= 15) {
    return returnCoffeeIcon(4);
  } else {
    return <Coffee style={{ width: 20 }} />;
  }
};

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  return (
    <S.PostItemLink
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.5}
      to={slug}
    >
      <S.PostItemWrapper>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min de leitura - {coffeNeeded(timeToRead)}
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
      </S.PostItemWrapper>
    </S.PostItemLink>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string,
  timeToRead: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PostItem;
