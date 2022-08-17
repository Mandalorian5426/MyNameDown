import React from 'react';
import { render } from '@testing-library/react';
import ProviderHome from './ProviderHome';

test('renders learn react link', () => {
  render(<ProviderHome />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
