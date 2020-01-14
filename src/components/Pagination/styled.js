import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8899a6;
  border-top: 1px solid #38444d;
  padding: 1.5rem 3rem;
  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1fa1f2;
    }
  }
`;
