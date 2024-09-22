import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import App from './App';

test('Should present the route title on scene content', async () => {
  const {getByLabelText, getByText, queryByText} = render(<App />);

  expect(getByText('First route')).toBeDefined();

  fireEvent.press(getByLabelText('Second'), {});

  expect(getByText('Second route')).toBeDefined();
  expect(await queryByText('First route')).toBeNull();
});

test('fireEvent.press should switch the tab', async () => {
  const {getByLabelText, getByText, queryByText} = render(<App />);

  expect(getByText('First route')).toBeDefined();

  fireEvent.press(getByLabelText('Second')); // This doesn't work because of e.metaKey etc

  expect(getByText('Second route')).toBeDefined();
  expect(await queryByText('First route')).toBeNull();
});
