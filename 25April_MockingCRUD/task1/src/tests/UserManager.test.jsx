import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserManager from "../components/UserManager";
beforeEach(() => {
    global.fetch = jest.fn();
});
afterEach(() => {
    jest.restoreAllMocks();
});
test("loads and displays users", async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([{ id: 1, name: "sita" }]),
    });
    render(<UserManager />);
    expect(await screen.findByText("sita")).toBeInTheDocument();
});
test("adds a user", async () => {
    fetch
      .mockResolvedValueOnce({ json: () => Promise.resolve([]) }) // GET
      .mockResolvedValueOnce({
        json: () => Promise.resolve({ id: 2, name: "ram" }),
      }); // POST
    render(<UserManager />);
    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "ram" },
    });
    fireEvent.click(screen.getByTestId("add-button"));
    await waitFor(() => {
      expect(screen.getByText("ram")).toBeInTheDocument();
    });
});
test("delete a user", async () => {
    fetch
      .mockResolvedValueOnce({
        json: () => Promise.resolve([{ id: 3, name: "laxman" }]),}) // GET
      .mockResolvedValueOnce(); // DELETE
    render(<UserManager />);
    await waitFor(() => {
      expect(screen.getByText("laxman")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("delete-3"));
    await waitFor(() => {
      expect(screen.queryByText("laxman")).not.toBeInTheDocument();
    });
});
test("shows error on fetch failure", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));
    render(<UserManager />);
    expect(await screen.findByRole("alert")).toHaveTextContent("Failed to load users");
});