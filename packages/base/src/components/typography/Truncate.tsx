/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import styled from 'styled-components';
import { system } from 'styled-system';

import { Text, TextProps } from './Text'

const wordBreak = system({
  wordBreak: true,
});

const boxAlign = ({ textAlign }: any) => {
  const boxAlignments = {
    left: {
      '-webkit-box-align': 'start',
    },
    center: {
      '-webkit-box-align': 'center',
    },
    right: {
      '-webkit-box-align': 'end',
    },
  };

  return boxAlignments[textAlign || 'center'];
};

interface ITruncateProps {
  lines?: number;
  wordBreak?: string;
}
export type TruncateProps = ITruncateProps & TextProps;
export const Truncate = styled(Text)<TruncateProps>(
  boxAlign,
  wordBreak,
  ({ lines }: ITruncateProps) => ({
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': `${lines}`,
  }),
);

Truncate.displayName = 'Truncate';

const defaultProps: any = {
  lines: 1,
  lineHeight: 4,
  textAlign: 'left',
  wordBreak: 'break-word',
};
Truncate.defaultProps = defaultProps;