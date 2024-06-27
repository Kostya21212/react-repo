import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/slices/counterSlice';
import todoReducer from '../store/slices/todoSlice';
import ordersReducer from '../store/slices/ordersSlice'; 

export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        orders: ordersReducer, 
    },
});
