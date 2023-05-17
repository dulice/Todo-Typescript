import { render, screen } from "@testing-library/react"
import Header from "../components/Header";

describe("Render Header Component", () => {
    it("Should Render Header Component Correctly", () => {
        render(<Header />);
        const element = screen.getByRole('heading', {  name: /to do list/i});
        expect(element).toBeInTheDocument();
    })
})