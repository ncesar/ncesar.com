import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from '../../utils/getThemeColor';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.5}
          to={prevPage}
        >
          ← Página Anterior
        </AniLink>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <AniLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          to={nextPage}
        >
          Próxima Página →
        </AniLink>
      )}
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  children: PropTypes.node,
  currentPage: PropTypes.number.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  nextPage: PropTypes.string,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
};

export default Pagination;
