import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema';
import { ordersCollection } from '../collections/orders'
import { cartProductSchema } from './cartProductsMethods'

//Couldn't make the schema validation work for te products field (array of custom objects).

// const orderSchema = new SimpleSchema({
//     number: String,
//     userId: String,
//     username: String,
//     products: { type: Array }, "products.type.$": cartProductSchema,
//     subtotal: { type: Number, min: 0 },
//     taxes: { type: Number, min: 0 },
//     total: { type: Number, min: 0 },
//     createdAt: Date
// });

Meteor.methods({
    'orders.insert'({ number, userId, username, products, createdAt, subtotal, taxes, total }) {

        //orderSchema.validate({ number: number, userId: userId, username: username, products: products, subtotal: subtotal, taxes: taxes, total: total, createdAt: createdAt });

        return ordersCollection.insert({ number: number, username: username, products: products, createdAt: createdAt, subtotal: subtotal, taxes: taxes, total: total });

    }
});