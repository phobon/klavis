import styled from 'styled-components';
import Button from './Button';

const SquareButton = styled(Button)({
  padding: 0,
});

SquareButton.displayName = 'SquareButton';

SquareButton.defaultProps = {
  ...Button.defaultProps,
  toggled: false,
  disabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
};

export default SquareButton;