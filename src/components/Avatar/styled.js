import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 5.75rem;
  margin: auto;
  width: 5.75rem;
  ${media.lessThan('large')`
    height: 2.875rem;
    width: 2.875rem;  
  `}
`;