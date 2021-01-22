import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProductReview,
  getTopPopularProducts
} from '../controllers/product.js';

const router = express.Router();

import { protect, admin } from '../middlewares/auth.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/popular', getTopPopularProducts);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

export default router;
