import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  it("should render the button with the text", () => {
    render(<Button text="Carregar mais posts" />);
    expect.assertions(1);

    const button = screen.getByRole("button", { name: /carregar mais posts/i });

    expect(button).toHaveAttribute("class", "button");
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button onClick={fn} text="Carregar mais posts" />);

    const button = screen.getByRole("button", { name: /carregar mais posts/i });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<Button disabled={true} text="Carregar mais posts" />);
    const button = screen.getByRole("button", { name: /carregar mais posts/i });
    expect(button).toBeDisabled();
  });

  it("should be enabled when disabled is false", () => {
    render(<Button disabled={false} text="Carregar mais posts" />);
    const button = screen.getByRole("button", { name: /carregar mais posts/i });
    expect(button).not.toBeDisabled();
  });
});
