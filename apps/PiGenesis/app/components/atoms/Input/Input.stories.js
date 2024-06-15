import React from 'react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Text = () => <Input type="text" placeholder="Enter text" />;
export const Email = () => <Input type="email" placeholder="Enter email" />;
export const Password = () => <Input type="password" placeholder="Enter password" />;
export const Disabled = () => <Input disabled placeholder="Enter text" />;
export const Error = () => <Input error="Invalid input" placeholder="Enter text" />;
