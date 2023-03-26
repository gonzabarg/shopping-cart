import { Meteor } from "meteor/meteor";
import { productsCollection } from "../collections/products";

Meteor.methods({
    'products.insertMany'(products) {


        productsCollection.schema.validate(products);

        productsCollection.insertMany(products);

    }
})

