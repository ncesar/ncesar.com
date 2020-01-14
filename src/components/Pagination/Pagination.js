import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as S from './styled';

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
      {!isFirst && <Link to={prevPage}>← Página Anterior</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <Link to={nextPage}>Próxima Página →</Link>}
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
