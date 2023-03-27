import { Meteor } from 'meteor/meteor';

import { productsCollection } from '../collections/products';

Meteor.publish('products', function publishAllProducts() {

    return productsCollection.find({});

});

Meteor.publish('product', function getProductById(productId) {

    return productsCollection.find({ _id: productId });
})