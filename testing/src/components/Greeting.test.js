import { act, render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('render "hello world" as text', () => {
        //Arrange
        render(<Greeting />);

        //Action 
        // ...not required there 

        // Assert
        const helloElement = screen.getByText(/hello world/i);
        expect(helloElement).toBeInTheDocument();
    })

    test('render "good to see you" if button was not clicked', () => {
        render(<Greeting />);

        const outputElem = screen.getByText("good to see you", { exact: false });
        expect(outputElem).toBeInTheDocument();
    })

    test('render "Changed" if button was clicked', () => {
        render(<Greeting />); 

        // Act
        const buttonElement = screen.getByRole('button');
        act(() => {
            // fire events that update state 
            userEvent.click(buttonElement) 
          });

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })

    test(`doesn't render "good to see you" if button was clicked`, () => { 
        render(<Greeting />);
 
        const buttonElement = screen.getByRole('button');
        act(() => { 
            userEvent.click(buttonElement) 
        })
 
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    })
})