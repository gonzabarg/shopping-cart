import SimpleSchema from "simpl-schema";
import { orderProductsCollection } from "../collections/orderProducts";

orderProductsCollection.schema = new SimpleSchema({
    cartId: { type: String },
    orderId: { type: String, required: false },
    productId: { type: String },
    quantity: { type: Number, min: 0 }
});