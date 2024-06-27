import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, addOrder, deleteOrder } from '../../store/slices/ordersSlice';
import axios from 'axios';

const Goods = () => {
  const [viewOrders, setViewOrders] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleViewOrders = () => {
    setViewOrders(true);
  };

  const handleBackToCategories = () => {
    setViewOrders(false);
  };

  return (
    <div>
      {viewOrders ? (
        <Orders onBack={handleBackToCategories} />
      ) : (
        <div>
          <button onClick={handleViewOrders}>Мои заказы</button>
          <Categories />
        </div>
      )}
    </div>
  );
};

const Categories = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://667aa1dabd627f0dcc8fd4af.mockapi.io/goods')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке продуктов', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newOrder = {
      date: new Date().toLocaleString(),
      price: product.price,
      details: product,
    };
    dispatch(addOrder(newOrder));
    alert('Товар добавлен в заказ');
  };

  return (
    <div>
      
      <div className='bg-warning container  h-100 mt-3' style={{borderRadius:'20px', marginBottom:'200px'}}>
        <ul className='d-flex flex-row justify-content-center  gap-5 list-unstyled pt-3 rounded-1' style={{borderRadius:'20px',flexWrap:'wrap'}}>
          {products.map(product => (
            <li key={product.id}>
              <div className="card bg-black p-3 rounded-sm text-white mb-3" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '300px' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-white">${product.price}</p>
                  <button onClick={() => handleAddToCart(product)} className="bg-warning text-black">Купити</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Orders = ({ onBack }) => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleDeleteOrder = (orderIndex) => {
    dispatch(deleteOrder(orderIndex));
  };

  return (
    <div className='bg-warning container text d-flex flex-col justify-center align-middle  w-auto' style={{borderRadius:'20px'}}>
      <h3>Мои заказы</h3>
      <button onClick={onBack} style={{ margin: '0 auto', width: '250px' }}>Назад к категориям</button>
      {orders.length === 0 ? (
        <p>Нет заказов.</p>
      ) : (
        <ul className='d-flex flex-row justify-content-around list-unstyled mt-3' style={{flexWrap:'wrap'}}>
          {orders.map((order, index) => (
            <li key={index} className='bg-warning'>
              <div onClick={() => handleOrderClick(order)} className='card bg-black p-3 rounded-sm text-white mb-3'>
                <img src={order.details.image} alt={order.details.name} style={{ height: '200px' }} className='mb-4' />
                <p>Дата: {order.date}</p>
                <p>Цена: ${order.price}</p>
                 <button className='bg-warning text-black' onClick={() => handleDeleteOrder(index)}>Удалить</button>
              {selectedOrder === order && (
                <div>
                  <h3>Детали заказа</h3>
                  <p>{JSON.stringify(order.details)}</p>
                </div>
              )}
              </div>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Goods;
