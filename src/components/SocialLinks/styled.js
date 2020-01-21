import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;
  margin-top: -5px;
  margin-left: 55px;
  display: flex;
  align-items: baseline;
  ${media.lessThan('large')`
    display: none;
  `}
`;
export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;
export const SocialLinksItem = styled.li`
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;
export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`;
export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  fill: #bbb;
`;
