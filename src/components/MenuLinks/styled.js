import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  display: flex;
  align-items: baseline;
  width: 100%;
  text-align: left;
  justify-content: flex-end;
  margin-top: -30px;
  ${media.lessThan('large')`
    margin-top: -48px;
    position: relative;
    top: 6px;
  `}
  ${media.lessThan('small')`
  position: relative;
  top: 23px;
  z-index: 999;
  `}
`;
export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  display: inline-flex;
  flex-direction: row;
`;
export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  font-weight: bold;
  margin-right: 30px;
  position: relative;
  &:last-child {
    margin-right: 0;
    &:after {
      content: none;
    }
  }
  &:after {
    content: '•';
    color: var(--texts);
    position: absolute;
    right: -12px;
    width: 2px;
    height: 2px;
  }
  .active {
    color: var(--highlight);
  }
`;
export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`;
