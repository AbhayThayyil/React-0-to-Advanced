import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Case", () => {

  // Helper functions to run something before/after each/all tests

  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input with placeholder name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes  inside Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });
});
