import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button } from '@phobon/base';

import withTooltip from './withTooltip';

const TooltipButton = withTooltip(Button);

storiesOf('Components/Tooltip', module)
  .add('Basic example', () => (
    <TooltipButton tooltip="Tooltip text">
      Any component
    </TooltipButton>
  ))
  .add('With positioning', () => (
    <Box fullWidth fullHeight flexDirection="column">
      <TooltipButton tooltip="Tooltip text" mb={3}>
        Tooltip opens down
      </TooltipButton>

      <TooltipButton tooltip="Tooltip text" mb={3} tooltipDirection="up">
        Tooltip opens up
      </TooltipButton>

      <TooltipButton tooltip="Tooltip text" mb={3} tooltipDirection="left">
        Tooltip opens left
      </TooltipButton>

      <TooltipButton tooltip="Tooltip text" mb={3} tooltipDirection="right">
        Tooltip opens right
      </TooltipButton>
    </Box>
  ))
  .add('With fluid layout', () => (
    <Box width={500} height={400} flexDirection="column" alignItems="flex-start" bg="grayscale.7">
      <TooltipButton tooltip="Tooltip text" mb={3} fullWidth bg="white">
        Tooltip opens down
      </TooltipButton>
    </Box>
  ))
  .add('Without tooltip prop', () => (
    <Box fullWidth fullHeight flexDirection="column">
      <TooltipButton tooltip="Tooltip text" mb={3}>
        This has a tooltip
      </TooltipButton>

      <TooltipButton>
        This does not have a tooltip
      </TooltipButton>
    </Box>
  ))
  .add('With offsets', () => {
    const items = Array(7).join().split(',');
    return (
      <Box fullWidth fullHeight flexDirection="column">
        {items.map((x, i) => (
          <TooltipButton key={i} tooltip="Tooltip text" mb={3} tooltipDirection="up" offset={i}>
            {`Offset ${i}`}
          </TooltipButton>
        ))}
      </Box>
  )});
