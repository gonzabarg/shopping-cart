import { Mongo } from 'meteor/mongo';

export const ordersCollection = new Mongo.Collection('orders');