import { Mongo } from 'meteor/mongo';

export const cartProductsCollection = new Mongo.Collection('cartProducts');