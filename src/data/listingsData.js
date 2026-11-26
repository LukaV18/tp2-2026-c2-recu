import { getDb } from './connection.js';

export async function findAllListings(page, pageSize, property_type = null) {
    const db = getDb();
    const query = {};

    if (property_type) {
        query.property_type = property_type;
    }
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const listings = await db.collection('listingsAndReviews').find(query).skip(skip).limit(pageSize).toArray();
        return listings;
    } else {
        // Sin paginación: trae todos los documentos
        const listings = await db.collection('listingsAndReviews').find(query).toArray();
        return listings;
    }
}

export async function findListingById(id) {
    const db = getDb();
    const listing = await db.collection('listingsAndReviews').findOne({ _id: id });
    console.log(listing);
    return listing;
}

export async function findListingsByCountry(country) {
    const db = getDb();
    const listing = await db.collection('listingsAndReviews').find({ 'address.country': country }).toArray();
    console.log(listing);
    return listing;
}
