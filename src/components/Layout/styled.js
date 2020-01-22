import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;
  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;
export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 100px 300px 60px;
  transition: background, color 0.5s;
  width: 100%;
  body#grid& {
    grid-template-areas: 'posts' 'pagination';
  }
  ${media.lessThan('large')`
    padding: 4rem 0 3rem 0;
  `}
`;
