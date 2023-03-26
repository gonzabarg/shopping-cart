import SimpleSchema from "simpl-schema";
import { productsCollection } from "../collections/products";

productsCollection.schema = new SimpleSchema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    thumbnail: { type: String },
    brand: { type: String },
    stock: { type: Number, min: 0 }
});



