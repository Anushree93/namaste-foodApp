import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../utils/foodStore';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

it("should render header component with a login btn", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button');
    expect(loginBtn).toBeInTheDocument();
})

it("should render header component with a cart value", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartBtn = screen.getByText('Cart: 0');
    expect(cartBtn).toBeInTheDocument();
})

it("should render header component with a careers", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const careersBtn = screen.getByText('Careers');
    expect(careersBtn).toBeInTheDocument();
})

it("should render header component with a home", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const homeBtn = screen.getByText('Home');
    expect(homeBtn).toBeInTheDocument();
})

it("should render header component with a About", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const aboutBtn = screen.getByText('About');
    expect(aboutBtn).toBeInTheDocument();
})

// it("should change login button to logout on click event", () => {
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header/>
//       </Provider>
//     </BrowserRouter>

//     const loginBtn = screen.getByRole('button',{name:'Login'});

//     fireEvent.click(loginBtn);

//     const logoutBtn = screen.getByRole('button',{name:'Logout'});
//     expect(logoutBtn).toBeInTheDocument();
// })