import { Meteor } from 'meteor/meteor'
import SimpleSchema from "simpl-schema";
import { cartProductsCollection } from '../collections/cartProducts'


const cartProductSchema = new SimpleSchema({
    productId: String,
    userId: String,
    name: String,
    image: String,
    brand: String,
    quantity: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    price: { type: Number, min: 0 },
    subtotalProduct: { type: Number, min: 0 }
});


Meteor.methods({

    'cartProducts.add'({ productId, userId, name, image, brand, quantity, stock, price, subtotalProduct }) {

        cartProductSchema.validate({ productId: productId, userId: userId, name: name, image: image, brand: brand, quantity: quantity, stock: stock, price: price, subtotalProduct: subtotalProduct }, (error) => console.log(error));

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

    'cartProducts.delete'({ _id }) {

        return cartProductsCollection.remove({ _id: _id }, (error, result) => {

            if (error) {

                throw new Meteor.Error('Delete product error', 'The cartProduct id is either undefined or it does not match any document.', 'There was an error when trying to delete this product.');
            }

            return result;
        });
    },

    'cartProducts.clear'({ userId }) {

        return cartProductsCollection.remove({ userId: userId }, (error, result) => {

            if (error) {

                throw new Meteor.Error('Clear cart error', 'The userId is either undefined or it does not match any document.', 'There was an error when trying to clear your cart.');
            }

            return result;
        })
    }
})