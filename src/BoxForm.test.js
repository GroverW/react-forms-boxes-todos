import React from 'react';
import { render, fireEvent, queryByLabelText } from "@testing-library/react";
import BoxForm from './BoxForm';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxForm />);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<BoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('shows user input changes', () => {
  const {queryByLabelText, queryByText, queryByDisplayValue } = render(
    <BoxForm addBox={()=> {}}/>);

  const colorInput = queryByLabelText("Background Color:");
  const widthInput = queryByLabelText("Width:");
  const heightInput = queryByLabelText("Height:");
  const submitBtn = queryByText("Add Box");

  fireEvent.change(colorInput, { target: {value: "green"}});
  fireEvent.change(widthInput, { target: {value: "100"}});
  fireEvent.change(heightInput, { target: {value: "200"}});

  expect(queryByDisplayValue("green")).toBeInTheDocument();
  expect(queryByDisplayValue("100")).toBeInTheDocument();
  expect(queryByDisplayValue("200")).toBeInTheDocument();

  fireEvent.click(submitBtn);

  expect(queryByDisplayValue("green")).not.toBeInTheDocument();
  expect(queryByDisplayValue("100")).not.toBeInTheDocument();
  expect(queryByDisplayValue("200")).not.toBeInTheDocument();
})