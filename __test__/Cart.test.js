import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantInfo from "../src/components/RestaurantInfo";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import MOCK_DATA from "./mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../src/redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    );
  });
});

it("Should load Restaurant Menu Component and open accordion on click and display food items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Rolls (6)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(6);
});

it("Should show add button and on click add single item to Cart in Header component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Rolls (6)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "Add" });

  const cartItemDefault = screen.getByText("Cart (0)");
  expect(cartItemDefault).toBeInTheDocument();

  fireEvent.click(addButtons[0]);

  const cartItem = screen.getByText("Cart (1)");
  expect(cartItem).toBeInTheDocument();
});

it("Should show add button and on click add multiple item to Cart in Header component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Rolls (6)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "Add" });

  const cartItemDefault = screen.getByText("Cart (1)");
  expect(cartItemDefault).toBeInTheDocument();

  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);

  const cartItem = screen.getByText("Cart (3)");
  expect(cartItem).toBeInTheDocument();
});

it("Should check number of food items in cart page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    );
  });

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(3);
});

it("Should clear cart on Clear button click ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    );
  });

  const clearButton = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearButton).toBeInTheDocument();
  fireEvent.click(clearButton);

  const cartItemAfterClear = screen.getByText("Cart (0)");
  expect(cartItemAfterClear).toBeInTheDocument();

  const cartEmptyWarning = screen.getByText("Cart is Empty !!");
  expect(cartEmptyWarning).toBeInTheDocument();
});
