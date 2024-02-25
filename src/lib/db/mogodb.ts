import { MongoClient, Db } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

export async function getMongoClient(): Promise<MongoClient> {
	const client = new MongoClient(MONGODB_URI);

	try {
		await client.connect();
		return client;
	} catch (error) {
		console.log('Error connecting to MongoDB:', error);
		throw error;
	}
}
