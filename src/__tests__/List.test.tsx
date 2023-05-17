import { fireEvent, render, screen } from "@testing-library/react"
import List from "../components/List";

//! jest not defined
describe("TodoLists component", () => {
    const todo = {
        id: Date.now(),
        list: "buy milk",
        createdAt: new Date(),
        done: false
    }
    const setTodos = jest.fn();
    beforeEach(() => {
        render(<List todos={[todo]} setTodos={setTodos} el={todo}/>);
    });
    afterEach(() => {
        setTodos.mockClear();
    })

    it("Todo is marked complete on checkbox click", () => {
        const checkbox = screen.getByRole("checkbox", {name: "buy milk"});
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked()
    })

    it("Todo item to be deleted on click of delete button", () => {
        const buttonElement = screen.getByRole("button", {name: /delete/i});
        fireEvent.click(buttonElement);
        expect(setTodos).toHaveBeenCalledTimes(1);
        expect(setTodos).toHaveBeenCalledWith(todo.id);
    })
})