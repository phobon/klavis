/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Box } from '@phobon/base';
import { Button } from '../Button';

import withTooltip from './withTooltip';

export default {
  component: withTooltip,
  title: 'Components/withTooltip',
};

const TooltipButton = withTooltip(Button);
const TooltipBox = withTooltip(Box);

export const withPositioning = () => (
  <Box fullWidth fullHeight pt={5}>
    <TooltipButton tooltip="Tooltip text" mr={3}>Tooltip opens down</TooltipButton>
    <TooltipButton tooltip="Tooltip text" mr={3} tooltipDirection="up">Tooltip opens up</TooltipButton>
    <TooltipButton tooltip="Tooltip text" mr={3} tooltipDirection="left">Tooltip opens left</TooltipButton>
    <TooltipButton tooltip="Tooltip text" mr={3} tooltipDirection="right">Tooltip opens right</TooltipButton>
  </Box>
);

export const withFluidLayout = () => (
  <Box width={500} height={400} flexDirection="column" alignItems="flex-start">
    <TooltipButton tooltip="Tooltip text" mb={3} fullWidth>Tooltip opens down</TooltipButton>
  </Box>
);

export const withAndWithoutATooltipProp = () => (
  <Box fullWidth fullHeight flexDirection="column">
    <TooltipButton tooltip="Tooltip text" mb={3}>This has a tooltip</TooltipButton>

    <TooltipButton>This does not have a tooltip</TooltipButton>
  </Box>
);

export const withDifferentOffsets = () => {
  const items = Array(7).join().split(',');
  return (
    <Box fullWidth fullHeight pt={8} flexDirection="column" alignItems="flex-start">
      <Box fullWidth mb={8} justifyContent="flex-start">
        {items.map((x, i) => (
          <TooltipButton key={i} tooltip="Tooltip text" mr={3} tooltipDirection="up" offset={i}>
            {`Offset ${i}`}
          </TooltipButton>
        ))}
      </Box>

      <Box fullWidth mb={8} justifyContent="flex-start">
        {items.map((x, i) => (
          <TooltipButton key={i} tooltip="Tooltip text" mr={3} tooltipDirection="down" offset={i}>
            {`Offset ${i}`}
          </TooltipButton>
        ))}
      </Box>
      
      <Box fullWidth mb={8} flexDirection="column">
        {items.map((x, i) => (
          <TooltipButton key={i} tooltip="Tooltip text" mb={3} tooltipDirection="right" offset={i}>
            {`Offset ${i}`}
          </TooltipButton>
        ))}
      </Box>
      
      <Box fullWidth flexDirection="column">
        {items.map((x, i) => (
          <TooltipButton key={i} tooltip="Tooltip text" mb={3} tooltipDirection="left" offset={i}>
            {`Offset ${i}`}
          </TooltipButton>
        ))}
      </Box>
    </Box>
)};

export const withVaryingDimensions = () => (
  <Box width={500} height={500} justifyContent="flex-start" alignItems="flex-start" flexDirection="column">
    <TooltipBox width="35%" height="25%" bg="greens.3" tooltip="With set dimensions" mb={3} borderRadius={3} />
    <TooltipBox fullWidth height={30} bg="purples.3" tooltip="With fluid width" borderRadius={3} />
  </Box>
);

export const withDifferentPositions = () => (
  <Box css={{ position: 'relative' }} width={500} height={500} justifyContent="flex-start" alignItems="flex-start" flexDirection="column">
    <TooltipBox position="absolute" left={50} top={80} width={100} height={100} bg="greens.3" tooltip="Absolute positioning" borderRadius={3} />
    <TooltipBox width={100} height={100} bg="purples.3" tooltip="Relative positioning" borderRadius={3} />
  </Box>
);;