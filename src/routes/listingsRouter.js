import express from 'express';
import { getAllListings, getListingId, getListingsCountry } from '../controllers/listingsController.js';

const router = express.Router();
router.get('/', getAllListings);
router.get('/country/:country', getListingsCountry);
router.get('/:id', getListingId);

export default router;
