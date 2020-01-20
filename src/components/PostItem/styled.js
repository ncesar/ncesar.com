import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }
  body#grid & {
    background-color: var(--background);
  }
`;
export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--borders);
  padding: 2rem 3rem;
  width: 100%;
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;
export const PostItemTag = styled.div`
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--postColor);
  font-size: 1.3rem;
  font-weight: 700;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
  color: var(--black);
  body#grid & {
    margin-bottom: 1.5rem;
  }
  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`;
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  ${media.lessThan('large')`
    margin: 0;
  `}
`;
export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;
export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;
export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;