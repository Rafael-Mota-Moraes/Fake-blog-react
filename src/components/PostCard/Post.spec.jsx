const { render, screen } = require("@testing-library/react");
import { PostCard } from ".";
import mock from "./mock";

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    const { debug } = render(<PostCard {...mock} />);
    expect(screen.getByRole("img", { name: /Título 1/i })).toHaveAttribute(
      "src",
      mock.cover
    );

    expect(screen.getByText(mock.title)).toBeInTheDocument();
  });
  it("should match snapshot", () => {
    const { container } = render(<PostCard {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
