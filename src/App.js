import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import BodyComp from './components/BodyComp';

const FoodApp = () =>{
    return (<div>
        <Header/>
        <BodyComp/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FoodApp/>);