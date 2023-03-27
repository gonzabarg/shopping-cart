import { Meteor } from 'meteor/meteor'
import { cartProductsCollection } from '../collections/cartProducts'

Meteor.publish('cartProducts', function getCartProducts(userId) {

    if (!userId) {
        throw new Meteor.Error('User id is undefined');
    }

    return cartProductsCollection.find({ userId: userId });
})