import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  ${media.lessThan('small')`
    z-index: 0;
  `}
`;

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  text-align: left;
  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.2rem;
  margin: 0 0 0 10px;
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  font-weight: 300;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  display: none;
  ${media.lessThan('large')`
  `}
`;
