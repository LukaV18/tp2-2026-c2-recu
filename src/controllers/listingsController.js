import { getListings, getListingById, getListingsByCountry } from '../services/listingsService.js';

export const getAllListings = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const property_type = req.query.property_type;
        const listings = await getListings(page, pageSize, property_type);
        res.json(listings);
    } catch (error) {
        console.log('Error fetching listings: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getListingId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const listing = await getListingById(id);

        if (!listing) {
            return res.status(404).json({ message: 'Propiedad no encontrada' });
        }

        res.json(listing);
    } catch (error) {
        console.log('Error fetching listing: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getListingsCountry = async (req, res) => {
    try {
        const country = req.params.country;
        console.log(country);
        const listing = await getListingsByCountry(country);

        res.json(listing);
    } catch (error) {
        console.log('Error fetching listing by country: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
