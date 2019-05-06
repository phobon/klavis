import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '@phobon/base';

import Toggle from './Toggle';

class ToggleHelper extends React.Component {
  state = {
    toggled: false,
  };

  render() {
    const { toggled } = this.state;

    return (
      <Toggle toggled={toggled} onClick={() => this.setState({ toggled: !toggled })} {...this.props} />
    );
  }
}

storiesOf('Components/Toggle', module)
  .add('With different states', () => (
    <Box>
      <Toggle tooltip="Toggled" toggled mr={2} />
      <Toggle tooltip="Not toggled" mr={2} />
      <Toggle tooltip="Disabled" disabled />
    </Box>
  ))
  .add('With the ability to toggle', () => (
    <ToggleHelper tooltip="cCick to toggle" />
  ))
  .add('With different colours', () => (
    <Box>
      <Toggle tooltip="Toggled blue" bg={['blues.6', 'blues.5']} toggled mr={2} />
      <Toggle tooltip="Toggled purple" bg={['purples.6', 'purples.5']} mr={2} toggled />
      <Toggle tooltip="Toggled orange" bg={['oranges.6', 'oranges.5']} toggled />
    </Box>
  ))
  .add('With different sizes', () => (
    <Box>
      <Toggle tooltip="Small (s)" mr={2} size="s" />
      <Toggle tooltip="Small (s)" mr={2} size="s" toggled />
    </Box>
  ));
