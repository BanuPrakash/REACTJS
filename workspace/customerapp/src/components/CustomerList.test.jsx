import { fireEvent, render, screen } from "@testing-library/react";
// import { describe, expect } from "vitest";
import CustomerList from "./CustomerList";

// Test suite
describe('testing <CustomerList />', () => {
    // test spec
    it("renders <CustomerList />", () => {
        render(<CustomerList />);  // not react-dom
        // screen.debug();
        //let btns = screen.getAllByRole('button');
        let btns = document.querySelectorAll('button');
        expect(btns.length).toBe(6);
    });

    // test spec
    it("delete <CustomerList />", () => {
        render(<CustomerList />);  // not react-dom
        // screen.debug();
        let btns = screen.getAllByRole('button');
        fireEvent.click(btns[4]);
        btns = screen.getAllByRole('button');
        let txt = screen.queryByText(/Ross/);
        expect(txt).toBeFalsy();
        expect(btns.length).toBe(5);
    });

    // test spec
    it("filter <CustomerList />", () => {
        render(<CustomerList />);  // not react-dom
        let txtBox = screen.getByPlaceholderText('search by name');


        fireEvent.change(txtBox, { "target": { "value": "Geller" } });
        screen.debug();
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(2);
    });
});