import styled from 'styled-components';
import Button from './Button';

const CircleButton = styled(Button)({
  padding: 0,
  borderRadius: '50%',
});

CircleButton.displayName = 'CircleButton';

CircleButton.defaultProps = {
  ...Button.defaultProps,
  toggled: false,
  disabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
};

export default CircleButton;
