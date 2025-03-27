// import { fireEvent, render, screen } from '@testing-library/react';
// import Calculator from './component/25March_eve/Calculator';

// test('renders calculator', () => {
//   render(<Calculator />);
//   expect(screen.getByText("Basic Calculator")).toBeInTheDocument();
// });

// test("performs addition correctly",()=>{
//   render(<Calculator/>);
//   fireEvent.click(screen.getByTestId("btn-1"));
//   fireEvent.click(screen.getByTestId("btn-+"));
//   fireEvent.click(screen.getByTestId("btn-2"));
//   fireEvent.click(screen.getByTestId("btn-="));
//   expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 3");
// });
// test("performs subtraction correctly",()=>{
//   render(<Calculator/>);
//   fireEvent.click(screen.getByTestId("btn-9"));
//   fireEvent.click(screen.getByTestId("btn--"));
//   fireEvent.click(screen.getByTestId("btn-5"));
//   fireEvent.click(screen.getByTestId("btn-="));
//   expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 4");
// });
// test("performs multiplication correctly",()=>{
//   render(<Calculator/>);
//   fireEvent.click(screen.getByTestId("btn-3"));
//   fireEvent.click(screen.getByTestId("btn-*"));
//   fireEvent.click(screen.getByTestId("btn-4"));
//   fireEvent.click(screen.getByTestId("btn-="));
//   expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 12");
// });
// test("performs division correctly",()=>{
//   render(<Calculator/>);
//   fireEvent.click(screen.getByTestId("btn-8"));
//   fireEvent.click(screen.getByTestId("btn-/"));
//   fireEvent.click(screen.getByTestId("btn-2"));
//   fireEvent.click(screen.getByTestId("btn-="));
//   expect(screen.getByTestId("calc-result")).toHaveTextContent("Result: 4");
// });
// test("pclears input correctly",()=>{
//   render(<Calculator/>);
//   fireEvent.click(screen.getByTestId("btn-9"));
//   fireEvent.click(screen.getByTestId("btn-C"));
//   expect(screen.getByTestId("calc-input")).toHaveValue("");
// });
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductApp from "./ProductApp";

describe("ProductApp Component", () => {
  test("renders Product Management heading", () => {
    render(<ProductApp />);
    expect(screen.getByText("Product Management")).toBeInTheDocument();
  });

  test("adds a new product", () => {
    render(<ProductApp />);

    fireEvent.change(screen.getByPlaceholderText("Product Name"), {
      target: { value: "Laptop" },
    });
    fireEvent.change(screen.getByPlaceholderText("Price"), {
      target: { value: "1000" },
    });
    fireEvent.click(screen.getByText("Add Product"));

    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
  });

  test("edits a product", () => {
    render(<ProductApp />);

    fireEvent.change(screen.getByPlaceholderText("Product Name"), {
      target: { value: "Phone" },
    });
    fireEvent.change(screen.getByPlaceholderText("Price"), {
      target: { value: "500" },
    });
    fireEvent.click(screen.getByText("Add Product"));

    fireEvent.click(screen.getByText("Edit"));
    fireEvent.change(screen.getByPlaceholderText("Product Name"), {
      target: { value: "Smartphone" },
    });
    fireEvent.click(screen.getByText("Update Product"));

    expect(screen.getByText("Smartphone")).toBeInTheDocument();
    expect(screen.queryByText("Phone")).not.toBeInTheDocument();
  });

  test("deletes a product", () => {
    render(<ProductApp />);

    fireEvent.change(screen.getByPlaceholderText("Product Name"), {
      target: { value: "Tablet" },
    });
    fireEvent.change(screen.getByPlaceholderText("Price"), {
      target: { value: "300" },
    });
    fireEvent.click(screen.getByText("Add Product"));
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Tablet")).not.toBeInTheDocument();
  });
});