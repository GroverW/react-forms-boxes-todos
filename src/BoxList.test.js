import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});