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
  align-items: baseline;
  flex-direction: column;
  border-bottom: 1px solid var(--borders);
  padding: 1.5rem 3rem;
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
  color: #fff;
  font-weight: 700;
  min-height: 20px;
  text-transform: uppercase;
  margin-top: 5px;
  border-radius: 5px;
  padding: 4px;
  font-size: 15px;
  min-width: 70px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
`;
