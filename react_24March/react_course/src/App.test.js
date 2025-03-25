import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './component/25March_eve/Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  expect(screen.getByText("Basic Calculator")).toBeInTheDocument();
});

test("performs addition correctly",()=>{
  render(<Calculator/>);
  fireEvent.click(screen.getByTestId("btn-1"));
  fireEvent.click(screen.getByTestId("btn-+"));
  fireEvent.click(screen.getByTestId("btn-2"));
  fireEvent.click(screen.getByTestId("btn-="));
  expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 3");
});
test("performs subtraction correctly",()=>{
  render(<Calculator/>);
  fireEvent.click(screen.getByTestId("btn-9"));
  fireEvent.click(screen.getByTestId("btn--"));
  fireEvent.click(screen.getByTestId("btn-5"));
  fireEvent.click(screen.getByTestId("btn-="));
  expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 4");
});
test("performs multiplication correctly",()=>{
  render(<Calculator/>);
  fireEvent.click(screen.getByTestId("btn-3"));
  fireEvent.click(screen.getByTestId("btn-*"));
  fireEvent.click(screen.getByTestId("btn-4"));
  fireEvent.click(screen.getByTestId("btn-="));
  expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 12");
});
test("performs division correctly",()=>{
  render(<Calculator/>);
  fireEvent.click(screen.getByTestId("btn-8"));
  fireEvent.click(screen.getByTestId("btn-/"));
  fireEvent.click(screen.getByTestId("btn-2"));
  fireEvent.click(screen.getByTestId("btn-="));
  expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 4");
});
test("pclears input correctly",()=>{
  render(<Calculator/>);
  fireEvent.click(screen.getByTestId("btn-9"));
  fireEvent.click(screen.getByTestId("btn-C"));
  expect(screen.getByTestId("calc-input")).toHaveValue("");
});