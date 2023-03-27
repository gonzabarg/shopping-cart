import { Meteor } from 'meteor/meteor';
import { fetch } from 'meteor/fetch';

import { productsCollection } from '../imports/api/collections/products';
import '../imports/api/methods/productMethods';
import '../imports/api/publications/productPublications';

import '../imports/api/collections/cartProducts'
import '../imports/api/methods/cartProductsMethods'
import '../imports/api/publications/cartProductsPublications'


function insertProduct({ name, description, price, brand, image, thumbnail, detail, stock }) {
    productsCollection.insert({ name, description, price, brand, image, thumbnail, detail, stock });
};



Meteor.startup(async () => {

    // If the Products collection is empty, add some data.

    if (await productsCollection.find().countAsync() === 0) {

        const { products } = await fetch('https://dummyjson.com/products/category/laptops')
            .then(res => res.json())
            .catch(e => console.log(e));

        products.forEach((product) => {

            console.log('Producto individual: ', product);

            insertProduct({
                name: product.title,
                description: product.description,
                price: product.price,
                brand: product.brand,
                image: product.images[0],
                thumbnail: product.thumbnail,
                brand: product.brand,
                stock: product.stock
            });
        })


    } else {
        console.log('Sample products already stored in DB');
    }
});


