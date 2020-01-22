import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  border-bottom: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 105px;
  padding: 1rem 2rem;
  align-items: flex-start;
  ${media.lessThan('large')`
    height: auto;
    padding-top: 10px;
    padding-bottom: 22px;
  `}
`;
