import { destructureLayoutProps } from './destructureLayoutProps';

test('Test correct result from destructureLayoutPRops', () => {
  const props = {
    mr: 3,
    my: 6,
    minHeight: '20%',
    randomProp: 'astdp',
    anotherRandomProp: 55,
  };

  const [layoutProps, passthroughProps] = destructureLayoutProps(props);

  // Test passthroughProps
  expect(Object.keys(passthroughProps).length).toBe(2);

  expect(passthroughProps.randomProp).toBe('astdp');
  expect(passthroughProps.anotherRandomProp).toBe(55);

  // Test expected results from layoutProps
  expect(Object.keys(layoutProps).length).toBe(3);

  expect(layoutProps.mr).toBe(3);
  expect(layoutProps.my).toBe(6);
  expect(layoutProps.minHeight).toBe('20%');

  // Ensure no additional props are added here.
  expect(layoutProps.width).toBe(undefined);
});