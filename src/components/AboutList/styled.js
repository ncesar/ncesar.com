import styled from 'styled-components';

export const AboutListWrapper = styled.ul`
  list-style: ${props => (props.dot ? 'inherit' : 'none')};
  padding: 10px 48px;
`;
export const AboutListItem = styled.li`
  color: var(--texts);
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 6px;
  line-height: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
  strong {
    color: var(--highlight);
    font-weight: 500;
  }
  em {
    color: var(--postColor);
    font-style: italic;
  }
`;
