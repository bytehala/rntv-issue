import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import App from './App';

test('Should present the route title on scene content', async () => {
  const {toJSON, getByLabelText, getByText, queryByText} = render(<App />);

  expect(toJSON()).toMatchSnapshot(); // only first scene rendered

  expect(getByText('First route')).toBeDefined();

  fireEvent.press(getByLabelText('Second'), {});

  expect(getByText('Second route')).toBeDefined();
  expect(await queryByText('First route')).toBeNull();
});
