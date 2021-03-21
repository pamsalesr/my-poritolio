import React from 'react'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';

describe('Testing <Home />', () => {
  it('should have an image', () => {
    const { getByAltText } = render(<Home />);
    const profilePicture = getByAltText(/Pamela Sales/);
    expect(profilePicture).toBeInTheDocument();
    expect(profilePicture.src).toContain('pamela.jpeg');
  });

  it('should have an habilities list with an emphasis element', () => {
    const { getByTestId } = render(<Home />);
    const emphasisHability = getByTestId('strongText');
    expect(emphasisHability).toBeInTheDocument();
  });
});