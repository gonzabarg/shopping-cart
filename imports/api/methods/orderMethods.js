import { Meteor } from 'meteor/meteor'
import { ordersCollection } from '../collections/orders'

Meteor.methods({
    'orders.insert'({ number, username, products, createdAt, subtotal, taxes, total }) {

        return ordersCollection.insert({ number: number, username: username, products: products, createdAt: createdAt, subtotal: subtotal, taxes: taxes, total: total });

    }
});