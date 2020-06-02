import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../App";

test("renders App and text", () => {
  const { getByText } = render(
    <Provider
      store={createStore(() => ({
        todos: [],
        visibilityFilter: "SHOW_ALL"
      }))}
    >
      <App />
    </Provider>
  );
  const linkElement = getByText(/nutanix todo/i);
  expect(linkElement).toBeInTheDocument();
});
