import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const foodStore = configureStore({

    reducer:{
        cart:cartSlice
    }

});

export default foodStore;