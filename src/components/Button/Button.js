import styled, { css } from 'styled-components';
import {
  space,
  color,
  width,
  height,
  borderRadius,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  border,
  borderColor,
} from 'styled-system';
import PropTypes from 'prop-types';

const buttonVariant = props => {
  const tertiary = css`
    background-color: ${props.theme.colors.background};
    border-color: transparent;
    color: ${props.theme.colors.grayscale[1]};
    fill: ${props.theme.colors.grayscale[1]};
    &:hover {
      background-color: ${props.theme.colors.grayscale[5]};
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
      }
    `,
    secondary: css`
      background-color: ${props.theme.colors.grayscale[6]};
      border-color: ${props.theme.colors.grayscale[5]};
      color: ${props.theme.colors.grayscale[1]};
      fill: ${props.theme.colors.grayscale[1]};
      &:hover {
        background-color: ${props.theme.colors.grayscale[5]};
      }
    `,
    tertiary,

    warning: css`
      background-color: ${props.theme.colors.guidance.warning[1]};
      border-color: ${props.theme.colors.guidance.warning[0]};
      color: ${props.theme.colors.guidance.warning[0]};
      fill: ${props.theme.colors.guidance.warning[0]};
      &:hover {
        background-color: ${props.theme.colors.oranges[5]};
        color: ${props.theme.colors.guidance.warning[0]};
        fill: ${props.theme.colors.guidance.warning[0]};
      }
    `,
    danger: css`
      background-color: ${props.theme.colors.guidance.error[1]};
      border-color: ${props.theme.colors.guidance.error[0]};
      color: ${props.theme.colors.guidance.error[0]};
      fill: ${props.theme.colors.guidance.error[0]};
      &:hover {
        background-color: ${props.theme.colors.reds[5]};
        color: ${props.theme.colors.guidance.error[0]};
        fill: ${props.theme.colors.guidance.error[0]};
      }
    `,
    success: css`
      background-color: ${props.theme.colors.guidance.success[1]};
      border-color: ${props.theme.colors.guidance.success[0]};
      color: ${props.theme.colors.guidance.success[0]};
      fill: ${props.theme.colors.guidance.success[0]};
      &:hover {
        background-color: ${props.theme.colors.greens[5]};
        color: ${props.theme.colors.guidance.success[0]};
        fill: ${props.theme.colors.guidance.success[0]};
      }
    `,

    subtle: tertiary,
    link: css`
      background-color: transparent;
      border: 0;
      color: ${props.theme.colors.grayscale[1]};
      fill: ${props.theme.colors.grayscale[1]};
      padding: 0;
      text-decoration: underline dotted;
      &:hover {
        color: ${props.theme.colors.accent[1]};
        fill: ${props.theme.colors.accent[1]};
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

const isToggled = props => {
  if (!props.isToggled) {
    return '';
  }

  const tertiary = css`
    background-color: ${props.theme.colors.grayscale[2]};
      color: ${props.theme.colors.grayscale[6]};
    &:hover {
      background-color: ${props.theme.colors.grayscale[1]};
    }
  `;
  const isToggledVariants = {
    primary: css`
      background-color: ${props.theme.colors.accent[0]};
      &:hover {
        background-color: ${props.theme.colors.accent[1]};
      }
    `,
    secondary: css`
      background-color: ${props.theme.colors.grayscale[2]};
      color: ${props.theme.colors.grayscale[6]};
      &:hover {
        background-color: ${props.theme.colors.grayscale[1]};
      }
    `,
    tertiary,

    warning: css`
      background-color: ${props.theme.colors.oranges[5]};
      &:hover {
        background-color: ${props.theme.colors.guidance.warning[1]};
      }
    `,
    danger: css`
      background-color: ${props.theme.colors.reds[5]};
      &:hover {
        background-color: ${props.theme.colors.guidance.error[1]};
      }
    `,
    success: css`
      background-color: ${props.theme.colors.greens[5]};
      &:hover {
        background-color: ${props.theme.colors.guidance.success[1]};
      }
    `,

    subtle: tertiary,
    link: css`
      color: ${props.theme.colors.accent[1]};
      fill: ${props.theme.colors.accent[1]};
      text-decoration: underline;
      &:hover {
        color: ${props.theme.colors.grayscale[1]};
        fill: ${props.theme.colors.grayscale[1]};
        text-decoration: underline dotted;
      }
    `,
    clean: css`
    `,
  };

  return isToggledVariants[props.variant];
};

const fullWidth = props => props.fullWidth && css`width: 100%;`;
const fullHeight = props => props.fullHeight && css`height: 100%;`;

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
  disabled: props.isDisabled,
}))`
  box-sizing: border-box;
  display: flex;
  flex: none;
  position: relative;

  ${alignItems}
  ${justifyContent}

  border: 0;

  cursor: pointer;

  transition:
    border-color 180ms ease-out,
    background-color 180ms ease-out,
    color 180ms ease-out,
    fill 180ms ease-out,
    transform 180ms ease-out,
    opacity 180ms ease-out;

  ${fontSize}
  ${fontWeight}

  ${size}

  ${space}
  ${width}
  ${height}

  ${fullWidth}
  ${fullHeight}

  &:focus {
    outline: 0;

    &::after {
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      content: "";
      box-shadow: 0 0 0 2px ${props => props.theme.colors.guidance.focus};
      border-radius: ${props => props.theme.radii[props.borderRadius]}px;
      pointer-events: none;
      z-index: 1;
    }
  }

  ${buttonVariant}

  /* color, border, borderColor, borderRadius and isToggled/disabled need precedence over buttonVariants */
  ${color}
  ${border}
  ${borderColor}
  ${borderRadius}

  ${isToggled}

  &:disabled {
    opacity: 0.5;
    background-color: ${props => props.theme.colors.grayscale[6]};
    border: 0;
    color: ${props => props.theme.colors.grayscale[4]};
    fill: ${props => props.theme.colors.grayscale[4]};
    pointer-events: none;
  }
`;

Button.displayName = 'Button';

Button.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,

  /** Whether the button is toggled. or not */
  isToggled: PropTypes.bool,

  /** Whether the button is disabled. or not */
  isDisabled: PropTypes.bool,

  /** Sizes to the full width of its parent container, or sizes to content */
  fullWidth: PropTypes.bool,

  /** Sizes to the full height of its parent container, or sizes to content */
  fullHeight: PropTypes.bool,

  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link', 'clean']),

  /** Button size */
  size: PropTypes.oneOf(['s', 'm', 'l']),

  /** Button type */
  type: PropTypes.string,
};

Button.defaultProps = {
  width: 'initial',
  fontSize: 1,
  borderRadius: 3,
  borderColor: 'grayscale.5',
  isToggled: false,
  isDisabled: false,
  variant: 'secondary',
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
  type: 'button',
};

export default Button;
