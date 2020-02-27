import React from 'react';
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import BoxList from './BoxList';


it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('it successfully adds box', () => {
  const {queryByLabelText, queryByText, queryByTestId } = render(
    <BoxList />);

  const colorInput = queryByLabelText("Background Color:");
  const widthInput = queryByLabelText("Width:");
  const heightInput = queryByLabelText("Height:");
  const submitBtn = queryByText("Add Box");

  fireEvent.change(colorInput, { target: {value: "green"}});
  fireEvent.change(widthInput, { target: {value: "100"}});
  fireEvent.change(heightInput, { target: {value: "200"}});
  fireEvent.click(submitBtn);

  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByTestId("TEST")).toBeInTheDocument();

});

it('it successfully removes box', () => {
  const {queryByLabelText, queryByText, queryByTestId } = render(
    <BoxList />);

  const colorInput = queryByLabelText("Background Color:");
  const widthInput = queryByLabelText("Width:");
  const heightInput = queryByLabelText("Height:");
  const submitBtn = queryByText("Add Box");

  fireEvent.change(colorInput, { target: {value: "green"}});
  fireEvent.change(widthInput, { target: {value: "100"}});
  fireEvent.change(heightInput, { target: {value: "200"}});
  fireEvent.click(submitBtn);

  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByTestId("TEST")).toBeInTheDocument();

  const removeBtn = queryByText("X");
  fireEvent.click(removeBtn);

  expect(queryByText("X")).not.toBeInTheDocument();
  expect(queryByTestId("TEST")).not.toBeInTheDocument();

});


