import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  popularProductsReducer
} from './reducers/product';
import { cartReducer } from './reducers/cart';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer
} from './reducers/user';
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer
} from './reducers/order';

const reducer = combineReducers({
  productCreate: productCreateReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  productReviewCreate: productReviewCreateReducer,
  popularProducts: popularProductsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
