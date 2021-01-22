// import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

import store from './store.js';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/shipping' component={ShippingPage} />
            <Route path='/payment' component={PaymentPage} />
            <Route path='/placeorder' component={PlaceOrderPage} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/order/:id' component={OrderPage} />
            <Route path='/cart/:id?' component={CartPage} />
            <Route path='/admin/userlist' component={UserListPage} />
            <Route path='/admin/user/:id/edit' component={UserEditPage} />
            <Route path='/admin/product/:id/edit' component={ProductEditPage} />
            <Route path='/admin/orderlist' component={OrderListPage} />
            <Route
              path='/admin/productList'
              component={ProductListPage}
              exact
            />
            <Route
              path='/admin/productlist/:pageNumber'
              component={ProductListPage}
              exact
            />
            <Route path='/search/:keyword' component={HomePage} exact />
            <Route path='/page/:pageNumber' component={HomePage} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              component={HomePage}
              exact
            />
            <Route exact path='/' component={HomePage} />
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
