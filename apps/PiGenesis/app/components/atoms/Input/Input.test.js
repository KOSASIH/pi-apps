import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders label', () => {
    const { getByText } = render(
      <Input label="Email" type="email" />
    );
    expect(getByText('Email')).toBeInTheDocument();
  });

  it('calls onChange when changed', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={onChange} placeholder="Enter text" />
    );
    const input = getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('disables input when disabled is true', () => {
    const { getByPlaceholderText } = render(
      <Input disabled placeholder="Enter text" />
);
    const input = getByPlaceholderText('Enter text');
    expect(input).toBeDisabled();
  });
});
