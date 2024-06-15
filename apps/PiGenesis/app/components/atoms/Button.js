import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Click me!</Button>);
    expect(getByText('Click me!')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me!</Button>);
    const button = getByText('Click me!');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when disabled is true', () => {
    const { getByText } = render(<Button disabled>Click me!</Button>);
    const button = getByText('Click me!');
    expect(button).toBeDisabled();
  });
});
