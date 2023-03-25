import SimpleSchema from "simpl-schema";
import { productsCollection } from "../collections/products";

productsCollection.schema = new SimpleSchema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    stock: { type: Number, min: 0 },
    soldCount: { type: Number, min: 0 }
});

