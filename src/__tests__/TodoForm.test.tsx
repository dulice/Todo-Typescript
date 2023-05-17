import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from '../components/TodoForm';

describe("Render TodoForm Component", () => {
    beforeEach(() => {
        render(<TodoForm setTodos={() => {}}/>);
    })

    it("should not show error message when component is loaded", async () => {
        const alertElement = screen.queryByRole("alert");
        expect(alertElement).not.toBeInTheDocument();
    });

    it("should show error message when submit the button with empty field", async () => {
        const buttonElement = screen.getByRole("button", { name: /add/i });
        await userEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
    });
    

    //! Jest is not defined
    it("form submission should go through successfully", () => {
        const setTodos = jest.fn();
        jest.mock('uuidv4', () => {
            return {
                uuid: () => 1234
            }
        })
        render(<TodoForm setTodos={setTodos}/>);
        const inputElement = screen.getByPlaceholderText(/add todo list/i);
        const buttonElement = screen.getByRole('button', {name: /add/i});

        fireEvent.change(inputElement, {target: {value: "buy milk"}});
        fireEvent.click(buttonElement);
        expect(setTodos).toHaveBeenCalledTimes(1);
        expect(setTodos).toHaveBeenCalledWith({
            id: 1234,
            list: "buy mikl",
            createdAt: new Date(),
            done: false
        })
        expect(inputElement).toHaveValue ("")
    })
})