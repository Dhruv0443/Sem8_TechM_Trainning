import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../components/UserList";
// Mock global fetch
beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve([
                    { id: 1, name: 'sita' },
                    { id: 2, name: 'ram' },
                ]),
        })
    );
});
afterEach(() => {
    jest.restoreAllMocks();
});
test('renders list of users', async () => {
    render(<UserList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
        expect(screen.getAllByTestId('user-item')).toHaveLength(2);
        expect(screen.getByText("sita")).toBeInTheDocument();
        expect(screen.getByText("ram")).toBeInTheDocument();
    });
});
