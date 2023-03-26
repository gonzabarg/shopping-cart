import { Meteor } from 'meteor/meteor';

import { productsCollection } from '../collections/products';

Meteor.publish('products', function publishAllProducts() {

    return productsCollection.find({});

});