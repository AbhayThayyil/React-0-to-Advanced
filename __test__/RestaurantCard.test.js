import { render, screen } from "@testing-library/react"
import MOCK_DATA from "./mocks/restaurantCardMock.json"
import RestaurantCard, { withPromotedLabel } from "../src/components/RestaurantCard"
import "@testing-library/jest-dom"


it("Should render Restaurant card component with props",()=>{
render(<RestaurantCard restaurantData={MOCK_DATA}/>)

const restaurantName=screen.getByText("Pizza Hut")

 expect(restaurantName).toBeInTheDocument()

})

it("Should render Restaurant card component with promoted label",()=>{
    const HigherOrderFunction=withPromotedLabel(RestaurantCard)

    // const promotedLabel=screen.getByText("Promoted")

    // expect(promotedLabel).toBeInTheDocument()

    render(<HigherOrderFunction/>)
})