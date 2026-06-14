/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';

jest.mock('../src/component/splashScreen', () => 'SplashScreen');
jest.mock('../src/navigation', () => 'Navigation');
jest.mock('../src/themes/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));
jest.mock('../src/i18n/RTLContext', () => ({
  RTLProvider: ({ children }: { children: React.ReactNode }) => children,
}));

it('renders correctly', async () => {
  jest.useFakeTimers();

  let component: renderer.ReactTestRenderer | undefined;

  await act(async () => {
    component = renderer.create(<App />);
  });

  act(() => {
    jest.runOnlyPendingTimers();
  });

  component?.unmount();
  jest.useRealTimers();
});
