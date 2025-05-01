import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
describe("App Component", () => {
    test("renders Restaurant Manager header", () => {
        render(<App />);
        const header = screen.getByText(/Restaurant Manager/i);
        expect(header).toBeInTheDocument();
    });
    // Add similar tests for update and delete functionality
});
