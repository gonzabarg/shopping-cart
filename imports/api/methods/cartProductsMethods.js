import { Meteor } from 'meteor/meteor';
import { cartProductsCollection } from '../collections/cartProducts';

Meteor.methods({

    'cartProducts.add'({ productId, userId, name, quantity, price }) {

        if (cartProductsCollection.find({ productId: productId, userId: userId }).count() === 0) {

            return cartProductsCollection.insert({ productId: productId, userId: userId, name: name, quantity: quantity, price: price });

        }

        return cartProductsCollection.update({ productId: productId, userId: userId }, { $inc: { quantity: quantity } });


    },

    'cartProducts.get'({ userId }) {

        return cartProductsCollection.find({ cartId: cartId });
    },

    'cartProducts.deleteAll'({ userId }) {

        return cartProductsCollection.remove({ cartId: cartId });
    }
})