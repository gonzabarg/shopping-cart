import { Meteor } from 'meteor/meteor'
import { productsCollection } from '../collections/products'

Meteor.methods({

    'products.removeFromStock'({ productId, quantity }) {
        productsCollection.update({ _id: productId }, { $inc: { stock: -quantity } })
    },

    'products.returnToStock'({ _id, quantity }) {

        productsCollection.update({ _id: _id }, { $inc: { stock: quantity } })
    }


});