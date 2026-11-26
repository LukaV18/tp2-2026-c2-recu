import express from "express";
import { getAllListings, getListingId } from "../controllers/listingsController.js";

const router = express.Router();
router.get("/", getAllListings);
router.get("/:id", getListingId);

export default router;
