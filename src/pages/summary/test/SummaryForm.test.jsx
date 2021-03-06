import { fireEvent, render,screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initials condition", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {name: /confirm order/i});
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables on first click and disable on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
  const confirmButton = screen.getByRole("button", {name: /confirm order/i});

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();


});