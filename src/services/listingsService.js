import { findAllListings, findListingById, findListingsByCountry } from '../data/listingsData.js';

export const getListings = async (page, pageSize, property_type = null) => {
    return await findAllListings(page, pageSize, property_type);
};

export const getListingById = async (id) => {
    return await findListingById(id);
};

export const getListingsByCountry = async (country) => {
    return await findListingsByCountry(country);
};
