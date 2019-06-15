import styled from 'styled-components';
import { compose, color, space } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const badgeStyles = compose(space, color);

const Badge = styled.div`
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

  ${badgeStyles}
`;

Badge.displayName = 'Badge';

Badge.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
};

Badge.defaultProps = {
  bg: 'grayscale.2',
  color: 'white',
};

export default Badge;
