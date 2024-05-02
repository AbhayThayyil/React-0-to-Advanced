import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import MOCK_DATA from "./mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component with Search and search for 'chi' input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

//   const searchField = screen.getByPlaceholderText("Search Restaurant...");


// test how many cards at first
const cardsBefore=screen.getAllByTestId("resCard")
expect(cardsBefore.length).toBe(16)

const searchField=screen.getByTestId("searchInput")

fireEvent.change(searchField,{target:{value:"chi"}})

// Screen should load 4 restaurant cards

const cards=screen.getAllByTestId("resCard") // find all res card results with testid

  expect(cards.length).toBe(2);
});
