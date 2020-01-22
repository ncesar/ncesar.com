import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';
import { Coffee } from 'styled-icons/boxicons-regular/Coffee';

const coffeeNeeded = timeToRead => {
  if (timeToRead >= 5 && timeToRead < 10) {
    return (
      <React.Fragment>
        <Coffee style={{ width: 20 }} />
        <Coffee style={{ width: 20 }} />
      </React.Fragment>
    );
  } else if (timeToRead >= 10 && timeToRead < 15) {
    return (
      <React.Fragment>
        <Coffee style={{ width: 20 }} />
        <Coffee style={{ width: 20 }} />
        <Coffee style={{ width: 20 }} />
      </React.Fragment>
    );
  } else if (timeToRead >= 15) {
    return (
      <React.Fragment>
        <Coffee style={{ width: 20 }} />
        <Coffee style={{ width: 20 }} />
        <Coffee style={{ width: 20 }} />
        <Coffee style={{ width: 20 }} />
      </React.Fragment>
    );
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
  timeToWatch,
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
            {date} •{' '}
            {timeToWatch === '' || timeToWatch === null
              ? [timeToRead, ' min de leitura - ', coffeeNeeded(timeToRead)]
              : // eslint-disable-next-line react/prop-types
                [
                  timeToWatch,
                  ' - ',
                  coffeeNeeded(parseInt(timeToWatch.substring(0, 2))),
                ]}
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
