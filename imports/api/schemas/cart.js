import SimpleSchema from "simpl-schema";
import { cartsCollection } from "../collections/carts";

cartsCollection.schema = new SimpleSchema({
    userId: { type: String },
    products: { type: Array },
    subtotal: { type: Number },
    total: { type: Number }
})