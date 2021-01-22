import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import Product from './Product';
import { popularProducts } from '../actions/product';

const PopularProducts = () => {
  const dispatch = useDispatch();

  const popularProductList = useSelector((state) => state.popularProducts);
  const { loading, error, products } = popularProductList;

  useEffect(() => {
    dispatch(popularProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Popular Proudcts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default PopularProducts;
