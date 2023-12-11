import Careers from '../Careers';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

test("should render career component", ()=>{
    render(<Careers/>);
 })

test("should be btn in the rendered career component", ()=>{
   render(<Careers/>);

   const button = screen.getByRole('button');
   expect(button).toBeInTheDocument();
})

test("should return no of inputs", ()=>{
    render(<Careers/>);

    const noOfInputs = screen.getAllByRole('textbox');
    expect(noOfInputs.length).toBe(2);
})

test("should return name input from comp",()=>{
    render(<Careers/>);

    const sbmtBtn = screen.getByPlaceholderText('Name');
    expect(sbmtBtn).toBeInTheDocument();
})

test("should return contact input from comp",()=>{
    render(<Careers/>);

    const sbmtBtn = screen.getByPlaceholderText('Contact');
    expect(sbmtBtn).toBeInTheDocument();
})