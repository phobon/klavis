import styled from 'styled-components';
import { color, space } from 'styled-system';

const Badge = styled.div`
  ${space}
  min-width: ${props => props.theme.space[4]}px;
  max-width: ${props => props.theme.space[6]}px;
  height: ${props => props.theme.space[4]}px;
  padding: ${props => props.children.toString().length > 2 ? `0 ${props.theme.space[2]}px` : 0};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: ${props => props.theme.space[4] + 1}px;
  text-align: center;
  border-radius: ${props => props.theme.radii[5]}px;
  font-size: ${props => props.theme.fontSizes[0]}px;

  ${color}
`;

Badge.displayName = 'Badge';

Badge.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
};

Badge.defaultProps = {
  bg: 'grayscale.2',
  color: 'white',
};

export default Badge;
