import styled from 'styled-components';
import Button from './Button';

const CircleButton = styled(Button)`
  padding: 0;
  border-radius: 50%;
`;

CircleButton.displayName = 'CircleButton';

CircleButton.defaultProps = Object.assign({}, Button.defaultProps, {
  isToggled: false,
  isDisabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
});

export default CircleButton;
