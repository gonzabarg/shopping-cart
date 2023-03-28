import { Meteor } from 'meteor/meteor';
import { cartProductsCollection } from '../collections/cartProducts';

Meteor.methods({

    'cartProducts.add'({ productId, userId, name, image, brand, quantity, stock, price, subtotalProduct }) {

        if (cartProductsCollection.find({ productId: productId, userId: userId }).count() === 0) {

            return cartProductsCollection.insert({ productId: productId, userId: userId, name: name, image: image, brand: brand, quantity: quantity, stock: stock, price: price, subtotalProduct: subtotalProduct });

        }

        return cartProductsCollection.update({ productId: productId, userId: userId }, { $inc: { quantity: quantity, stock: -quantity, subtotalProduct: quantity * price } });


    },

    'cartProducts.addQuantity'({ _id, price }) {

        return cartProductsCollection.update({ _id: _id }, { $inc: { quantity: 1, stock: -1, subtotalProduct: price } });

    },

    'cartProducts.takeQuantity'({ _id, price }) {

        return cartProductsCollection.update({ _id: _id }, { $inc: { quantity: -1, stock: 1, subtotalProduct: -price } });
    },

    'cartProducts.delete'({ _id, price, quantity }) {

        return cartProductsCollection.remove({ _id: _id }, (error, result) => {

            if (error) {

                throw new Meteor.Error(error);
            }

            return result;
        });
    }
})