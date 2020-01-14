import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin: 2rem auto;
`;
export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;
export const SocialLinksItem = styled.li``;
export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`;
export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  fill: #bbb;
`;
