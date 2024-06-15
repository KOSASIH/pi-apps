import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Tertiary = () => <Button variant="tertiary">Tertiary</Button>;
export const Small = () => <Button size="small">Small</Button>;
export const Medium = () => <Button>Medium</Button>;
export const Large = () => <Button size="large">Large</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
