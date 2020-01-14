import styled from 'styled-components';
import { Link } from 'gatsby';

export const RecommendedWrapper = styled.section`
  display: flex;
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
`;
export const RecommendedLink = styled(Link)`
  display: flex;
  align-items: center;
  background: #192734;
  color: #1fa1f2;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
  }
  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }
  &.next {
    justify-content: flex-end;
  }
  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
