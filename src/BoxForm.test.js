import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxForm from './BoxForm';

it('renders without crashing', () => {
  render(<BoxForm />);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<BoxForm />);
  expect(asFragment()).toMatchSnapshot();
});