import express from 'express';
const router = express.Router();
import {
  userRegister,
  userLogin,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  getUserById
} from '../controllers/user.js';

import { protect, admin } from '../middlewares/auth.js';

router.get('/', protect, admin, getUsers); // admin route for get users list

router.post('/register', userRegister);
router.post('/login', userLogin);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// admin route
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

export default router;
