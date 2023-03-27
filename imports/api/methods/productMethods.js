import { Meteor } from 'meteor/meteor'
import { productsCollection } from '../collections/products'

Meteor.methods({
    'products.removeFromStock'({ productId, qty }) {
        productsCollection.update({ _id: productId }, { $inc: { stock: -qty } })
    }
});