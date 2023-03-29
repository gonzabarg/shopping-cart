import SimpleSchema from "simpl-schema";
import { cartProductsCollection } from '../collections/cartProducts';

cartsCollection.schema = new SimpleSchema({
    userId: { type: String },
    products: { type: Array },
    subtotal: { type: Number },
    total: { type: Number }
})