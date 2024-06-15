import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  it('renders children', () => {
    const { getByText } = render(<Label htmlFor="input">Email</Label>);
    expect(getByText('Email')).toBeInTheDocument();
  });
});
