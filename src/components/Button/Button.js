import styled, { css } from 'styled-components';
import {
  cover,
  layout,
  border,
  flexbox,
  typography,
  focus,
} from '@phobon/base';
import PropTypes from 'prop-types';
import withTooltip from '../Tooltip';

const buttonVariant = props => {
  const tertiary = css`
    background-color: transparent;
    border-color: transparent;
    color: ${props.theme.colors.grayscale[1]};
    fill: ${props.theme.colors.grayscale[1]};
    stroke: ${props.theme.colors.grayscale[1]};
    &:hover {
      background-color: ${props.theme.colors.grayscale[6]};
    }
  `;
  const buttonVariants = {
    primary: css`
      background-color: ${props.theme.colors.accent[1]};
      border-color: ${props.theme.colors.accent[1]};
      color: white;
      fill: white;
      &:hover {
        background-color: ${props.theme.colors.accent[0]};
        color: white;
        fill: white;
        stroke: white;
      }
    `,
    secondary: css`
      background-color: ${props.theme.colors.grayscale[7]};
      border-color: ${props.theme.colors.grayscale[5]};
      color: ${props.theme.colors.grayscale[1]};
      fill: ${props.theme.colors.grayscale[1]};
      stroke: ${props.theme.colors.grayscale[1]};
      &:hover {
        background-color: ${props.theme.colors.grayscale[6]};
      }
    `,
    tertiary,

    warning: css`
      background-color: ${props.theme.colors.guidance.warning[1]};
      border-color: ${props.theme.colors.guidance.warning[0]};
      color: ${props.theme.colors.guidance.warning[0]};
      fill: ${props.theme.colors.guidance.warning[0]};
      stroke: ${props.theme.colors.guidance.warning[0]};
      &:hover {
        background-color: ${props.theme.colors.oranges[5]};
        color: ${props.theme.colors.guidance.warning[0]};
        fill: ${props.theme.colors.guidance.warning[0]};
        stroke: ${props.theme.colors.guidance.warning[0]};
      }
    `,
    danger: css`
      background-color: ${props.theme.colors.guidance.error[1]};
      border-color: ${props.theme.colors.guidance.error[0]};
      color: ${props.theme.colors.guidance.error[0]};
      fill: ${props.theme.colors.guidance.error[0]};
      stroke: ${props.theme.colors.guidance.error[0]};
      &:hover {
        background-color: ${props.theme.colors.reds[5]};
        color: ${props.theme.colors.guidance.error[0]};
        fill: ${props.theme.colors.guidance.error[0]};
        stroke: ${props.theme.colors.guidance.error[0]};
      }
    `,
    success: css`
      background-color: ${props.theme.colors.guidance.success[1]};
      border-color: ${props.theme.colors.guidance.success[0]};
      color: ${props.theme.colors.guidance.success[0]};
      fill: ${props.theme.colors.guidance.success[0]};
      stroke: ${props.theme.colors.guidance.success[0]};
      &:hover {
        background-color: ${props.theme.colors.greens[5]};
        color: ${props.theme.colors.guidance.success[0]};
        fill: ${props.theme.colors.guidance.success[0]};
        stroke: ${props.theme.colors.guidance.success[0]};
      }
    `,

    link: css`
      background-color: transparent;
      border: 0;
      color: ${props.theme.colors.grayscale[1]};
      fill: ${props.theme.colors.grayscale[1]};
      stroke: ${props.theme.colors.grayscale[1]};
      padding: 0;
      text-decoration: underline dotted;
      &:hover {
        color: ${props.theme.colors.accent[1]};
        fill: ${props.theme.colors.accent[1]};
        stroke: ${props.theme.colors.accent[1]};
        text-decoration: underline;
      }
    `,
    clean: css`
      background: 0;
      border: 0;
      color: inherit;
      fill: inherit;
      padding: 0;
      width: unset;
      height: unset;
      &:hover {
        color: inherit;
        fill: inherit;
      }
    `,
  };

  return buttonVariants[props.variant];
};

const pressed = props => {
  const tertiary = css`
    background-color: ${props.theme.colors.grayscale[2]};
    color: ${props.theme.colors.grayscale[8]};
    &:hover {
      background-color: ${props.theme.colors.grayscale[1]};
    }
  `;
  const toggledVariants = {
    primary: css`
      background-color: ${props.theme.colors.accent[0]};
      &:hover {
        background-color: ${props.theme.colors.accent[1]};
      }
    `,
    secondary: css`
      background-color: ${props.theme.colors.grayscale[2]};
      color: ${props.theme.colors.grayscale[8]};
      &:hover {
        background-color: ${props.theme.colors.grayscale[1]};
      }
    `,
    tertiary,

    warning: css`
      background-color: ${props.theme.colors.oranges[6]};
      &:hover {
        background-color: ${props.theme.colors.guidance.warning[1]};
      }
    `,
    danger: css`
      background-color: ${props.theme.colors.reds[6]};
      &:hover {
        background-color: ${props.theme.colors.guidance.error[1]};
      }
    `,
    success: css`
      background-color: ${props.theme.colors.greens[6]};
      &:hover {
        background-color: ${props.theme.colors.guidance.success[1]};
      }
    `,

    link: css`
      color: ${props.theme.colors.accent[1]};
      fill: ${props.theme.colors.accent[1]};
      stroke: ${props.theme.colors.accent[1]};
      text-decoration: underline;
      &:hover {
        color: ${props.theme.colors.grayscale[1]};
        fill: ${props.theme.colors.grayscale[1]};
        stroke: ${props.theme.colors.grayscale[1]};
        text-decoration: underline dotted;
      }
    `,
    clean: css`
    `,
  };

  return toggledVariants[props.variant];
};

const size = props => {
  const sizes = {
    s: css`
      min-width: ${props.theme.space[4]}px;
      height: ${props.theme.space[4]}px;
      padding-left: ${props.theme.space[props.pl || 2]}px;
      padding-right: ${props.theme.space[props.pr || 2]}px;
    `,
    m: css`
      min-width: ${props.theme.space[5]}px;
      height: ${props.theme.space[5]}px;
      padding-left: ${props.theme.space[props.pl || 3]}px;
      padding-right: ${props.theme.space[props.pr || 3]}px;
    `,
    l: css`
      min-width: ${props.theme.space[6]}px;
      height: ${props.theme.space[6]}px;
      padding-left: ${props.theme.space[props.pl || 3]}px;
      padding-right: ${props.theme.space[props.pr || 3]}px;
    `,
  };

  return sizes[props.size];
};

const Button = styled.button.attrs(props => ({
  'aria-pressed': props.toggled ? 'true' : undefined,
}))`
  box-sizing: border-box;
  position: relative;

  cursor: pointer;

  transition: all 120ms ease-out;

  ${cover}
  ${typography}

  ${size}
  ${buttonVariant}

  ${layout}
  ${border}
  ${flexbox}

  &[aria-pressed="true"] {
    ${pressed}
  }

  ${focus}

  &:disabled {
    opacity: 0.5;
    background-color: ${props => props.theme.colors.grayscale[6]};
    border: 0;
    color: ${props => props.theme.colors.grayscale[4]};
    fill: ${props => props.theme.colors.grayscale[4]};
    stroke: ${props => props.theme.colors.grayscale[4]};
    pointer-events: none;
  }
`;

Button.displayName = 'Button';

Button.propTypes = {
  ...cover.propTypes,
  ...layout.propTypes,
  ...border.propTypes,
  ...flexbox.propTypes,
  ...typography.propTypes,

  /** Whether the button is toggled. or not */
  toggled: PropTypes.bool,

  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'link', 'clean']),

  /** Button size */
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

Button.defaultProps = {
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  width: 'initial',
  fontSize: 1,
  borderRadius: 3,
  borderColor: 'grayscale.5',
  toggled: false,
  variant: 'secondary',
  size: 'm',
  type: 'button',
};

export default withTooltip(Button);
