import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              userId: 1,
              id: 1,
              title: "Kaliteye hoşgeldiniz",
              completed: false,
            },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders App component", async () => {
    render(<App />);
    const linkElement = await screen.findByText(/Kaliteye hoşgeldiniz/i);
    expect(linkElement).toBeInTheDocument();
  });
});
