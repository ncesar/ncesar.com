import styled from 'styled-components';
import media from 'styled-media-query';
import Typography from '../Typography';

export const StyledTypography = styled(Typography)`
  color: var(--texts);
  font-size: 36px;
  padding: 24px 48px;
  font-weight: bold;
  ${media.lessThan('large')`
    padding-left: 16px;
  `}
  ${media.lessThan('small')`
    font-size: 24px;
  `}
`;
