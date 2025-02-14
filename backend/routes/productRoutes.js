import exp from 'constants';
import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

import {getProducts, getProductById} 
from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;