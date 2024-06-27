import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk для загрузки заказов
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get('https://<project-name>.mockapi.io/api/v1/orders');
  return response.data;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: JSON.parse(localStorage.getItem('orders')) || [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((order, index) => index !== action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
        localStorage.setItem('orders', JSON.stringify(state.orders));
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addOrder, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
